"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";
import {
  HeartPulse,
  LayoutDashboard,
  Home,
  BookOpen,
  Stethoscope,
  Info,
  PhoneCall,
  LogOut,
  X,
  FileText,
  Shield,
} from "lucide-react";

interface DashboardMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "Admin Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Home Page", href: "/", icon: Home },
  { label: "Blog & Articles", href: "/blog", icon: BookOpen },
  { label: "Doctors & Specialists", href: "/doctors", icon: Stethoscope },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Contact Us", href: "/contact", icon: PhoneCall },
];

export default function DashboardMenu({ open, onClose }: DashboardMenuProps) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        aria-label="Admin navigation drawer"
        className={`fixed left-0 top-0 z-50 flex h-full w-80 flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-5">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0b63ce] to-teal-500 text-white shadow-md">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#12385d] dark:text-white">CareConnect</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Admin Workspace</p>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-[#0b63ce]"
            aria-label="Close admin menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 space-y-1.5 flex-1 overflow-y-auto">
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 mb-2">
            Navigation & Controls
          </p>
          {links.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-blue-50 dark:bg-blue-950/60 text-[#0b63ce] dark:text-blue-400 font-bold"
                    : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#12385d] dark:hover:text-white"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-[#0b63ce]" : "text-zinc-400"}`} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* User Info and Logout */}
        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0b63ce] to-teal-500 text-white font-bold text-xs flex items-center justify-center">
              {user?.name?.charAt(0) || "A"}
            </div>
            <div className="flex-1 truncate">
              <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                {user?.name || "Admin"}
              </p>
              <p className="text-[10px] text-zinc-400 truncate">{user?.email}</p>
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              Admin
            </span>
          </div>

          <button
            onClick={() => {
              dispatch(logout());
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-300 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
