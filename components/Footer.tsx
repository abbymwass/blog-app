import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-orange-100 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#fff0ea]">
               <img src="/medical.png" alt="CareConnect Logo" className="h-6 w-6" />
              </div>
              <span className="font-display text-lg text-[#12b5a8]">Care<span className="text-[#16324a]">Connect</span></span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Trusted doctors, simple booking, and quality healthcare for every family.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#12b5a8]" aria-label="GitHub">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#12b5a8]" aria-label="X / Twitter">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#12b5a8]" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#12b5a8]" /> Verified doctors
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#12b5a8]" /> Secure & private
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#16324a]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-[#12b5a8]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#12b5a8]">
                  Health Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="transition-colors hover:text-[#12b5a8]">
                  Doctors & Specialists
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[#12b5a8]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#12b5a8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#16324a]">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#12b5a8]">
                  General Medicine
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#12b5a8]">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#12b5a8]">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#12b5a8]">
                  Dental Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#16324a]">
              Protected Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="transition-colors hover:text-[#12b5a8]">
                  Admin workspace
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition-colors hover:text-[#12b5a8]">
                  Author Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="transition-colors hover:text-[#12b5a8]">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-orange-100 pt-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CareConnect. Better health. Better living.</p>
        </div>
      </div>
    </footer>
  );
}
