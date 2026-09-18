import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, HeartPulse, Microscope, Stethoscope } from "lucide-react";

const services = [
  {
    title: "Emergency & urgent care",
    detail: "Rapid assessment when every minute matters—calm rooms, fast teams.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Specialist clinics",
    detail: "Heart, neurology, paediatrics, and long-term care under one roof.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Diagnostics & imaging",
    detail: "Clear answers from modern labs and imaging, explained in plain language.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Wellness & recovery",
    detail: "Rehab, nutrition, and everyday habits that help you feel like yourself.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid items-stretch gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-end rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <h1 className="font-display text-4xl tracking-tight text-[#16324a] sm:text-5xl">
            Hospital care that feels human.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Find the right team, understand your options, and take the next step without the maze of corridors.
          </p>
          <Link href="/doctors" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#12b5a8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0ea39a]">
            Meet the care team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative min-h-56 overflow-hidden rounded-[1.8rem] bg-[#e8faf7] sm:min-h-72">
          <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85" alt="Bright hospital corridor" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {services.map(({ title, detail, icon: Icon, image }) => (
          <article key={title} className="group grid overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-40 bg-[#fff0ea]">
              <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-2 p-4 sm:p-5">
              <Icon className="h-5 w-5 text-[#12b5a8]" />
              <h3 className="font-display text-xl text-[#16324a]">{title}</h3>
              <p className="text-sm leading-6 text-slate-500">{detail}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
