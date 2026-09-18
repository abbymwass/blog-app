"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";
import { Menu, X, LogOut } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (pathname === "/" || pathname.startsWith("/dashboard")) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Doctors", href: "/doctors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#fff0ea]">
              <img src="/medical.png" alt="CareConnect Logo" className="h-5 w-5" />
            </div>
            <span className="font-display text-lg tracking-tight text-[#12b5a8]">
              Care<span className="text-[#16324a]">Connect</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-[#16324a] text-white"
                      : "text-slate-600 hover:bg-[#fff0ea] hover:text-[#ff7a6e]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#12b5a8]/20 bg-[#e8faf7] px-3 py-1.5 text-xs font-bold text-[#0f7f76]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                  {user?.name || "Admin"}
                </div>
                <button
                  onClick={() => dispatch(logout())}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                  title="Sign out"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-[#fff6f0]"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-[#ff7a6e] px-4 py-2 text-sm font-bold text-white shadow-sm shadow-rose-300/40 transition-all hover:bg-[#f26559]"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-slate-600 transition-colors hover:bg-[#fff0ea] hover:text-[#ff7a6e]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="space-y-1 border-b border-orange-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-2xl px-3 py-2.5 text-base font-bold text-slate-700 hover:bg-[#fff0ea] hover:text-[#ff7a6e]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-2xl px-3 py-2.5 text-base font-bold text-slate-700 hover:bg-[#e8faf7] hover:text-[#12b5a8]"
          >
            Dashboard
          </Link>
          <div className="flex flex-col gap-2 border-t border-orange-100 pt-4">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  dispatch(logout());
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-2xl px-3 py-2 text-left text-base font-bold text-red-600 hover:bg-red-50"
              >
                Sign Out ({user?.name})
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-2xl px-3 py-2 text-base font-bold text-slate-700 hover:bg-[#fff6f0]"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-2xl bg-[#ff7a6e] px-3 py-2.5 text-center text-base font-bold text-white hover:bg-[#f26559]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
