"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { loginSuccess } from "@/lib/store/slices/authSlice";
import { UserPlus, Mail, Lock, User as UserIcon, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    // Simulate account registration
    dispatch(
      loginSuccess({
        id: "u_" + Date.now(),
        name,
        email,
        role: "admin",
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
      })
    );

    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-7 rounded-[1.8rem] bg-white p-8 shadow-xl shadow-rose-200/30 ring-1 ring-black/5 sm:p-10">
        {/* Card Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8faf7] text-[#12b5a8]">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="font-display text-2xl tracking-tight text-[#16324a]">
            Create an Account
          </h1>
          <p className="text-sm text-slate-500">Join CareConnect to manage notes and comments</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Abigael Mwangi"
                className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] py-2.5 pl-10 pr-4 text-sm text-[#16324a] focus:border-[#12b5a8] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abby@example.com"
                className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] py-2.5 pl-10 pr-4 text-sm text-[#16324a] focus:border-[#12b5a8] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Password
            </label>
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
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a6e] px-4 py-3 text-sm font-bold text-white shadow-md shadow-rose-300/30 transition-all hover:bg-[#f26559]"
          >
            Create Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#12b5a8] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
