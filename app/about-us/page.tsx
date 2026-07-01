import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  FileText,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Scale Partners | UAE Corporate Advisory Team",
  description:
    "Scale Partners supports UAE company formation, licensing, visas, banking readiness, tax handover, renewals, and ongoing compliance for founders and corporate shareholders.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Scale Partners | UAE Corporate Advisory",
    description:
      "A UAE corporate advisory desk built for clear market entry, structured company formation, and post-setup compliance support.",
    url: "/about-us",
    type: "website",
  },
};

const advisoryPillars = [
  {
    icon: Compass,
    title: "Route Selection",
    text: "We compare mainland, free zone, offshore, and specialist authority routes around activity, ownership, visa, office, and banking requirements.",
  },
  {
    icon: FileText,
    title: "Document Discipline",
    text: "Applications are prepared with the shareholder file, activity notes, UBO details, resolutions, and bank-ready support documents aligned before submission.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance After Launch",
    text: "The relationship continues through renewals, corporate tax, VAT, accounting coordination, visa changes, and authority record updates.",
  },
];

const supportAreas = [
  "Mainland, free zone, and offshore company formation",
  "Investor, partner, employment, and family visa coordination",
  "Corporate bank account readiness and ownership narratives",
  "Corporate tax, VAT, bookkeeping, and accounting handover",
  "License renewal calendars, amendments, and compliance reminders",
  "Specialist routes including DMCC, IFZA, Meydan, RAKEZ, DWTC, and Shams",
];

const clientTypes = [
  "First-time UAE founders who need a clear setup route",
  "International shareholders entering the UAE market",
  "Trading, services, consulting, technology, and holding structures",
  "Existing companies reviewing renewal, banking, or tax readiness",
];

const proofPoints = [
  { value: "UAE", label: "Market Entry Focus" },
  { value: "360", label: "Setup To Renewal Support" },
  { value: "Bank", label: "Readiness Led Documentation" },
];

export default function AboutUsPage() {
  return (
    <div className="animate-fade-in bg-white text-zinc-950">
      <section className="relative overflow-hidden bg-[#07140B] text-white">
        <Image
          src="/assets/dubai_skyline_premium.png"
          alt="Dubai skyline at night"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041209] via-[#07140B]/90 to-[#0B2E16]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-7 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              About Scale Partners
            </div>
            <h1 className="hero-brand-headline mt-7 max-w-4xl text-[44px] sm:text-[62px] lg:text-[78px] leading-[1.02] tracking-normal text-white">
              UAE Corporate Advisory For Structured Market Entry
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] text-white/82">
              Scale Partners helps founders and shareholders set up, operate, and maintain UAE companies with a clear route from licensing to visas, banking readiness, tax handover, renewal, and ongoing compliance.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-sp-forest shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-all hover:scale-[1.015]"
              >
                Speak To An Advisor
                <ArrowRight className="h-4 w-4 text-sp-emerald" />
              </Link>
              <a
                href="https://wa.me/971552051241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur transition-all hover:bg-white/12"
              >
                WhatsApp Advisory Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200/70 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[28px] border border-zinc-200 bg-white shadow-[0_20px_70px_rgba(11,46,22,0.08)] -mt-10 relative z-20 overflow-hidden">
            {proofPoints.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 px-6 py-6 sm:px-8 ${index !== proofPoints.length - 1 ? "md:border-r md:border-zinc-200" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sp-glass text-sp-emerald">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[24px] leading-none text-sp-forest">{item.value}</div>
                  <div className="mt-1 text-[13px] text-zinc-500">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-sp-emerald">What We Do</div>
              <h2 className="mt-4 max-w-xl text-[34px] sm:text-[46px] leading-[1.12] text-zinc-950">
                Formation Work Built Around The Reality Of Operating In The UAE
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-zinc-600">
                A company setup is only useful when the license, office route, ownership file, banking narrative, and compliance obligations are aligned. Our work is designed around that operating reality.
              </p>
            </div>

            <div className="grid gap-4">
              {advisoryPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_16px_55px_rgba(11,46,22,0.06)] transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_22px_70px_rgba(11,46,22,0.1)]"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-sp-glass text-sp-emerald">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[22px] leading-tight text-sp-forest">{pillar.title}</h3>
                        <p className="mt-3 text-[14px] leading-[1.85] text-zinc-600">{pillar.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sp-mintBg py-18 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-sp-border bg-white p-6 sm:p-8 shadow-[0_18px_60px_rgba(11,46,22,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sp-glass text-sp-emerald">
                  <Building2 className="h-5 w-5" />
                </div>
                <h2 className="text-[28px] sm:text-[34px] leading-tight text-sp-forest">Core Advisory Areas</h2>
              </div>
              <div className="mt-7 grid gap-3">
                {supportAreas.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/70 px-4 py-3 text-[14px] leading-relaxed text-zinc-650">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sp-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#07140B] p-6 sm:p-8 text-white shadow-[0_24px_70px_rgba(7,20,11,0.18)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/20 bg-white/8 text-emerald-300">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-[28px] sm:text-[34px] leading-tight text-white">Who We Support</h2>
              </div>
              <p className="mt-5 text-[14px] leading-[1.85] text-white/64">
                Our best work happens where the setup needs clear judgement rather than a one-line package quote.
              </p>
              <div className="mt-7 grid gap-3">
                {clientTypes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-[14px] leading-relaxed text-white/78">
                    <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="rounded-[30px] bg-[#07140B] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 text-white overflow-hidden relative">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-emerald-500/12 to-transparent lg:block" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-300">Advisory Desk</div>
                <h2 className="mt-4 max-w-2xl text-[32px] sm:text-[44px] leading-[1.13] text-white">
                  Build The Setup Around Your Actual Commercial Plan
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/66">
                  Tell us your activity, shareholder structure, visa needs, office preference, and banking profile. We will map the route before documents are filed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-sp-forest transition-all hover:scale-[1.015]"
                >
                  Contact Scale Partners
                  <ArrowRight className="h-4 w-4 text-sp-emerald" />
                </Link>
                <a
                  href="mailto:info@fourroadsgroup.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-7 py-4 text-[14px] font-semibold text-white transition-all hover:bg-white/12"
                >
                  Email Advisory Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
