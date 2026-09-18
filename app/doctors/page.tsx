"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Search,
  Star,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Filter,
} from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  hospital: string;
  location: string;
  experience: string;
  avatar: string;
  bio: string;
  articlesCount: number;
  availableDays: string;
  articleId: string;
}

const DOCTORS_DATA: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Sarah Jenkins",
    title: "MD, FACC",
    specialty: "Cardiology",
    rating: 4.9,
    reviewsCount: 124,
    hospital: "Metropolitan Heart & Vascular Center",
    location: "San Francisco, CA",
    experience: "14+ years",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=85",
    bio: "Specializing in preventive cardiology, cardiovascular diagnostics, and digital telemetry monitoring.",
    articlesCount: 6,
    availableDays: "Mon - Thu",
    articleId: "1",
  },
  {
    id: "doc-2",
    name: "Dr. Marcus Vance",
    title: "MD, PhD",
    specialty: "Neurology & Health-Tech",
    rating: 5.0,
    reviewsCount: 98,
    hospital: "Stanford Health Institute",
    location: "Palo Alto, CA",
    experience: "16+ years",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=85",
    bio: "Pioneer in neuro-rehabilitation and clinical applications of AI in cognitive neurological assessments.",
    articlesCount: 11,
    availableDays: "Tue - Fri",
    articleId: "3",
  },
  {
    id: "doc-3",
    name: "Dr. Elena Rostova",
    title: "MD, FAAP",
    specialty: "Pediatrics",
    rating: 4.8,
    reviewsCount: 187,
    hospital: "Children's Health Pavilion",
    location: "San Jose, CA",
    experience: "12+ years",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=85",
    bio: "Dedicated pediatric specialist focusing on early childhood developmental screenings, wellness, and pediatric immunology.",
    articlesCount: 4,
    availableDays: "Mon - Wed",
    articleId: "2",
  },
  {
    id: "doc-4",
    name: "Dr. David Kim",
    title: "MD, MS",
    specialty: "General Medicine & Telehealth",
    rating: 4.9,
    reviewsCount: 215,
    hospital: "Bay Area Family Medical Care",
    location: "Oakland, CA",
    experience: "10+ years",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=85",
    bio: "Passionate about comprehensive primary care, chronic condition management, and remote healthcare accessibility.",
    articlesCount: 8,
    availableDays: "Mon - Fri",
    articleId: "5",
  },
  {
    id: "doc-5",
    name: "Dr. Chloe Chen",
    title: "MD, MPH",
    specialty: "Preventive Care & Epidemiology",
    rating: 4.9,
    reviewsCount: 84,
    hospital: "Center for Global Health & Wellness",
    location: "San Francisco, CA",
    experience: "9+ years",
    avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=85",
    bio: "Focuses on evidence-based lifestyle medicine, epidemic tracking algorithms, and community wellness programs.",
    articlesCount: 5,
    availableDays: "Wed - Sat",
    articleId: "5",
  },
  {
    id: "doc-6",
    name: "Dr. Robert Alvarez",
    title: "MD",
    specialty: "Orthopedics & Sports Medicine",
    rating: 4.7,
    reviewsCount: 142,
    hospital: "Advanced Sports Medicine Clinic",
    location: "Berkeley, CA",
    experience: "15+ years",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=85",
    bio: "Specialist in minimally invasive joint surgery, biomechanical injury recovery, and athletic rehabilitation.",
    articlesCount: 3,
    availableDays: "Tue - Sat",
    articleId: "6",
  },
];

const SPECIALTIES = [
  "All",
  "Cardiology",
  "Neurology & Health-Tech",
  "Pediatrics",
  "General Medicine & Telehealth",
  "Preventive Care & Epidemiology",
  "Orthopedics & Sports Medicine",
];

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [consultationBooked, setConsultationBooked] = useState(false);

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const matchesSpecialty =
        selectedSpecialty === "All" || doc.specialty === selectedSpecialty;
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSpecialty && matchesSearch;
    });
  }, [searchQuery, selectedSpecialty]);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationBooked(true);
    setTimeout(() => {
      setConsultationBooked(false);
      setSelectedDoctor(null);
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 py-5 sm:px-6 lg:px-8">
      {/* Header */}
      {/* Doctors Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="group flex flex-col justify-between overflow-hidden rounded-[1.6rem] bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-blue-50 shrink-0">
                  <Image
                    src={doc.avatar}
                    alt={doc.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0b63ce] dark:bg-blue-950 dark:text-blue-300">
                      {doc.specialty}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">{doc.title} • {doc.experience}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {doc.bio}
              </p>

              <div className="space-y-1.5 pt-2 text-xs text-zinc-500 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="truncate">{doc.hospital}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{doc.rating}</span>
                    <span className="text-zinc-400 text-[11px]">({doc.reviewsCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{doc.availableDays}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
              <button
                onClick={() => setSelectedDoctor(doc)}
                className="flex-1 rounded-full bg-[#12b5a8] px-3 py-2.5 text-center text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0ea39a]"
              >
                Book Appointment
              </button>
              <Link
                href={`/blog/${doc.articleId}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#16324a]/10 px-3 py-2.5 text-[11px] font-bold text-[#16324a] transition-colors hover:bg-[#fff0ea]"
                title="Read this doctor's article"
              >
                <BookOpen className="h-4 w-4 text-[#ff7a6e]" />
                Article
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl">
            {consultationBooked ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Consultation Confirmed!
                </h3>
                <p className="text-xs text-zinc-500">
                  Your appointment with <span className="font-semibold">{selectedDoctor.name}</span> has been scheduled. Check your email for details.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                  <div>
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                      Book Consultation
                    </h3>
                    <p className="text-xs text-zinc-500">
                      With {selectedDoctor.name} ({selectedDoctor.specialty})
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleBook} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-orange-100 bg-[#fff6f0] px-3.5 py-2 text-sm focus:border-[#12b5a8] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-orange-100 bg-[#fff6f0] px-3.5 py-2 text-sm focus:border-[#12b5a8] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      className="w-full rounded-xl border border-orange-100 bg-[#fff6f0] px-3.5 py-2 text-sm focus:border-[#12b5a8] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Reason for Consultation
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief description of your health inquiry..."
                      className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:border-[#0b63ce] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#12b5a8] py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#0ea39a]"
                  >
                    Confirm Appointment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
