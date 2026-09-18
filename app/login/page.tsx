"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { loginStart, loginSuccess } from "@/lib/store/slices/authSlice";
import { Lock, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    dispatch(loginStart({ username, password }));
  };

  const handleDemoLogin = () => {
    dispatch(
      loginSuccess({
        id: "demo_admin",
        name: "Abby Admin",
        email: "admin@techpulse.dev",
        role: "admin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abby",
      })
    );
  };

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-7 rounded-[1.8rem] bg-white p-8 shadow-xl shadow-rose-200/30 ring-1 ring-black/5 sm:p-10">
        {/* Card Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0ea] text-[#ff7a6e]">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-display text-2xl tracking-tight text-[#16324a]">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-500">Sign in to manage blog posts and comments</p>
        </div>

        {/* Demo Fast Login Banner */}
      

        {/* Standard Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Username
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="emilys"
                className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] py-2.5 pl-10 pr-4 text-sm text-[#16324a] focus:border-[#12b5a8] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Password
              </label>
              <a href="#" className="text-xs text-[#12b5a8] hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] py-2.5 pl-10 pr-4 text-sm text-[#16324a] focus:border-[#12b5a8] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16324a] px-4 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-[#12b5a8]"
          >
            {loading ? "Signing in..." : "Sign In to Account"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-zinc-500">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="font-semibold text-[#12b5a8] hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
