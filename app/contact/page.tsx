"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
        <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:col-span-7">
          {submitted ? (
            <div className="space-y-4 py-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8faf7] text-[#12b5a8]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl text-[#16324a]">
                Message sent with a little sparkle
              </h3>
              <p className="mx-auto max-w-md text-sm text-slate-500">
                Thank you, <span className="font-semibold">{formData.name}</span>. We usually reply within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-4 rounded-full bg-[#12b5a8] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0ea39a]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h1 className="font-display text-3xl text-[#16324a]">Say hello</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#16324a]">
                    Full Name <span className="text-[#ff7a6e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] px-4 py-3 text-sm text-[#16324a] transition-all focus:border-[#12b5a8] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#16324a]">
                    Email Address <span className="text-[#ff7a6e]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] px-4 py-3 text-sm text-[#16324a] transition-all focus:border-[#12b5a8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#16324a]">
                  Subject <span className="text-[#ff7a6e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Question about an appointment"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-2xl border border-orange-100 bg-[#fff6f0] px-4 py-3 text-sm text-[#16324a] transition-all focus:border-[#12b5a8] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#16324a]">
                  Your Message <span className="text-[#ff7a6e]">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Write your note here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-orange-100 bg-[#fff6f0] px-4 py-3 text-sm text-[#16324a] transition-all focus:border-[#12b5a8] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a6e] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-rose-300/30 transition-all hover:bg-[#f26559] sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Submit Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4 lg:col-span-5">
          <div className="space-y-4 rounded-[1.6rem] bg-[#16324a] p-6 text-white">
            <h3 className="font-display text-xl">Direct inquiries</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4" />
                </div>
                <span>hello@careconnect.health</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+1 (555) 349-2049</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Nairobi • open for remote visits</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] bg-white p-2 shadow-sm ring-1 ring-black/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127642.54200495557!2d36.77116685!3d-1.2756820000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1789665841670!5m2!1sen!2ske"
              className="h-64 w-full rounded-[1.2rem] border-0 sm:h-72"
              title="Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
