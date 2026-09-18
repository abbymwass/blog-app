"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { logout, loginSuccess } from "@/lib/store/slices/authSlice";
import {
  Menu,
  X,
  HeartPulse,
  Home,
  BookOpen,
  Stethoscope,
  Info,
  PhoneCall,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
  Shield,
  Layers,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function HomeDashboardDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { posts } = useAppSelector((state) => state.posts);

  // Close drawer on route change or ESC key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/", icon: Home, badge: "Main" },
    { name: "Blog & Articles", href: "/blog", icon: BookOpen, count: posts.length },
    { name: "Doctors & Specialists", href: "/doctors", icon: Stethoscope, badge: "Verified" },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  const handleDemoSignIn = () => {
    dispatch(
      loginSuccess({
        id: "demo_admin",
        name: "Abby Admin",
        email: "admin@careconnect.dev",
        role: "admin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abby",
      })
    );
  };

  return (
    <>
      {/* Floating Left Hamburger Trigger for Homepage */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-[#16324a]/15 ring-1 ring-black/5 backdrop-blur"
        
          aria-label="Open Homepage Dashboard Menu"
        >
          <img src="/menu.png" alt="CareConnect menu" className="w-5 h-5" />
          {/* <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0b63ce] to-teal-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Menu className="w-4 h-4" />
          </div> */}
          {/* <div className="text-left hidden sm:block">
            <p className="text-xs font-bold leading-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
              Dashboard Menu
              <span className="w-2 h-2 rounded-full bg-[#0b63ce] animate-pulse" />
            </p>
            <p className="text-[10px] text-zinc-500 leading-tight">Explore all pages & tools</p>
          </div> */}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Slide-out Left Dashboard Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-80 sm:w-96 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-900/50">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
            <div className="w-9 h-9  flex items-center justify-center text-white">
           <img src="/medical.png" alt="CareConnect Logo" className="w-5 h-5" />
            </div>
            <div>
            
              <span className="font-bold tracking-tight text-[#0b9c9a]">Care<span className="text-[#0b9c9a]">Connect</span></span>
            
              
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin">
          {/* Main Navigation items (all items from the navbar) */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 mb-2">
              Main Navigation
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/60 text-[#0b63ce] dark:text-blue-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#0b63ce]" : "text-zinc-400"}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-[#0b63ce] dark:bg-blue-950 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}
                  {typeof item.count === "number" && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Admin Management Section */}
          <div className="space-y-2 p-4 ">
            <div className="flex items-center justify-between">
            
            
            </div>

           

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-900 dark:text-white hover:border-[#0b63ce] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 text-[#0b63ce]" />
                <span>Admin Dashboard</span>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Quick Metrics Widget */}
         
        </div>

        {/* Footer / Auth State */}
        <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70">
          {isAuthenticated ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0b63ce] to-teal-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {user?.name?.charAt(0) || "A"}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">
                      {user?.name || "Admin"}
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-tight truncate max-w-[150px]">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Online
                </span>
              </div>

              <button
                onClick={() => {
                  dispatch(logout());
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-300 text-xs font-semibold transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0b63ce] hover:bg-[#0956b3] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Sign Up
                </Link>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleDemoSignIn();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium text-[#0b63ce] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
              >
                <Sparkles className="w-3 h-3" /> Quick Demo Admin Sign In
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
