"use client";

import Image from "next/image";
import Link from "next/link";
import HomeDashboardDrawer from "@/components/HomeDashboardDrawer";
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarDays,
  Eye,
  HeartPulse,
  ShieldCheck,
  SmilePlus,
  Star,
  Stethoscope,
  BookOpen,
} from "lucide-react";

const specialties = [
  {
    name: "Cardiology",
    detail: "Heart care that feels calm",
    Icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Neurology",
    detail: "Rest, focus, and brain health",
    Icon: Brain,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dental",
    detail: "Smiles with extra sparkle",
    Icon: SmilePlus,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "General Medicine",
    detail: "Everyday checkups, made easy",
    Icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Pediatrics",
    detail: "Gentle care for little ones",
    Icon: Baby,
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ophthalmology",
    detail: "Clearer, brighter days",
    Icon: Eye,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
  },
] as const;

const doctors = [
  [
    "Dr. Sarah Wanjiku",
    "Cardiologist",
    "4.9",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Dr. James Mwangi",
    "Dentist",
    "4.8",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Dr. Grace Njeri",
    "Pediatrician",
    "4.9",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Dr. Peter Otieno",
    "General Physician",
    "4.7",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85",
  ],
] as const;

const benefits = [
  [ShieldCheck, "Verified Doctors", "Experienced clinicians you can actually reach."],
  [CalendarDays, "Easy Booking", "A few taps, then a confirmed slot."],
  [ShieldCheck, "Secure & Private", "Your story stays yours."],
  [HeartPulse, "24/7 Support", "Help whenever the worry shows up."],
] as const;

export default function HomePage() {
  return (
    <div className="relative">
      <HomeDashboardDrawer />

      <section className="relative isolate h-[70svh] min-h-[420px] max-h-[640px]  sm:h-[74svh]">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16324a]/80 via-[#16324a]/45 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-8 sm:items-center sm:px-6 sm:pb-0 lg:px-8">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Care that feels
              <span className="block text-[#12b5a8]">like a hug.</span>
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
              Find a doctor, peek at our health journal, and book without the clinic chaos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-full bg-[#12b5a8] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition hover:-translate-y-0.5 hover:bg-[#0ea39a]"
              >
                Find a Doctor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-[#16324a]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#16324a] transition hover:border-[#12b5a8]/40"
              >
                <BookOpen className="h-4 w-4 text-[#ff7a6e]" /> Health Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight text-[#16324a] sm:text-3xl">Find the right doctor</h2>
          <Link href="/doctors" className="hidden items-center gap-1 text-xs font-bold text-[#12b5a8] sm:flex">
            All specialties <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {specialties.map(({ name, detail, Icon, image }) => (
            <Link
              href="/doctors"
              key={name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#12b5a8] shadow-sm">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="px-2.5 py-2.5">
                <h3 className="text-xs font-extrabold text-[#16324a] group-hover:text-[#12b5a8]">{name}</h3>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl tracking-tight text-[#16324a] sm:text-3xl">Trusted faces</h2>
            <Link href="/doctors" className="hidden items-center gap-1 text-xs font-bold text-[#12b5a8] sm:flex">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map(([name, role, rating, image]) => (
              <article key={name} className="overflow-hidden rounded-[1.4rem] bg-white p-2 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.1rem] bg-slate-100">
                  <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
                  <span className="absolute right-2 top-2 rounded-full bg-[#fff6f0] px-2 py-1 text-[9px] font-extrabold text-[#12b5a8]">Online</span>
                </div>
                <div className="px-2 pb-2 pt-2.5">
                  <h3 className="text-sm font-extrabold text-[#16324a]">{name}</h3>
                  <p className="text-[11px] text-slate-500">{role}</p>
                  <div className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                    <Star className="h-3 w-3 fill-current" />
                    {rating} <span className="font-medium text-slate-400">(120+)</span>
                  </div>
                  <Link
                    href="/doctors"
                    className="mt-2.5 block rounded-full bg-[#16324a] py-2 text-center text-[11px] font-bold text-white transition hover:bg-[#12b5a8]"
                  >
                    Book Appointment
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl tracking-tight text-[#16324a] sm:text-3xl">Quality care, made simple</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([Icon, title, body]) => (
            <div key={title} className="rounded-[1.4rem] bg-white p-4 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0ea] text-[#ff7a6e]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-2.5 text-sm font-extrabold text-[#16324a]">{title}</h3>
              <p className="mx-auto mt-1 max-w-[190px] text-[11px] leading-4 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
