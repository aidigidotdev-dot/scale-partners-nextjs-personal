"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileText,
  Globe2,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useQuote } from "./QuoteProvider";
import { PageId } from "../types";

const setupRoutes = [
  {
    title: "Mainland Company Setup",
    tag: "Trade anywhere in the UAE",
    desc: "Best for businesses that need local market access, government tenders, retail operations, or direct UAE client contracts.",
    icon: Building2,
    page: "setup-mainland" as PageId,
  },
  {
    title: "Free Zone Company Setup",
    tag: "Fast, flexible, founder-friendly",
    desc: "Ideal for consultants, digital businesses, holding structures, trading firms, and founders seeking remote-friendly setup routes.",
    icon: Globe2,
    page: "setup-freezone" as PageId,
  },
  {
    title: "Offshore Company Setup",
    tag: "Holding and asset structure",
    desc: "Built for international ownership, asset holding, IP management, and global corporate structuring without UAE trading operations.",
    icon: ShieldCheck,
    page: "setup-offshore" as PageId,
  },
];

const processSteps = [
  ["01", "Business activity mapping", "We identify the right activity group and flag licensing constraints before submission."],
  ["02", "Jurisdiction recommendation", "Mainland, free zone, or offshore routes are compared against cost, visas, banking, and operations."],
  ["03", "Name and initial approval", "Trade name, shareholder details, and registry forms are prepared for authority review."],
  ["04", "License and establishment file", "We coordinate license issuance, corporate documents, and company establishment records."],
  ["05", "Visas, tax, and banking pack", "Your post-setup file is organized for residency, corporate tax, VAT, and bank account review."],
];

const documents = [
  "Passport copies for shareholders and managers",
  "UAE entry stamp or visa page, if available",
  "Proposed company names",
  "Business activity description",
  "Shareholding structure",
  "Office or flexi-desk preference",
  "Residential address and contact details",
  "Bank reference or CV for selected banking routes",
];

const costFactors = [
  { label: "Jurisdiction", text: "Mainland, premium free zone, budget free zone, or offshore registry." },
  { label: "Business activity", text: "Commercial, professional, industrial, media, consulting, trading, or regulated activities." },
  { label: "Visa allocation", text: "Investor visas, employee visas, family sponsorships, and establishment card needs." },
  { label: "Workspace", text: "Virtual desk, flexi-desk, serviced office, warehouse, or mainland lease." },
  { label: "Add-ons", text: "Corporate tax, VAT, bookkeeping, bank account support, PRO services, and document attestation." },
];

const faqs = [
  {
    q: "What is the best option for business setup in Dubai?",
    a: "The best route depends on your activity, where your customers are, whether you need visas, and how important UAE mainland trading is. Many digital founders prefer free zones, while retail, contracting, and local service businesses often need mainland licensing.",
  },
  {
    q: "How long does company formation in Dubai take?",
    a: "Straightforward free zone setups can be completed quickly once documents are ready. Mainland and regulated activities may need extra approvals, lease steps, or authority review. We map the timeline before submission.",
  },
  {
    q: "Can foreign investors own 100% of a UAE company?",
    a: "Many mainland and free zone activities allow full foreign ownership. Some regulated or strategic activities may have special approval requirements, which should be checked before choosing the license route.",
  },
  {
    q: "Do I need a UAE office for company setup?",
    a: "Some free zones allow flexi-desk or virtual workspace packages. Mainland and visa-heavy structures may require a lease or office allocation depending on activity and visa count.",
  },
  {
    q: "Can Scale Partners help after the license is issued?",
    a: "Yes. The setup plan can include corporate tax registration, VAT, accounting, bank account preparation, visas, renewals, and ongoing compliance support.",
  },
];

export default function BusinessSetupDubaiPage() {
  const router = useRouter();
  const { openBlankModal } = useQuote();

  const setPage = (page: PageId) => {
    router.push(page === "home" ? "/" : `/${page}`);
  };

  return (
    <div className="bg-white text-zinc-900 font-sans">
      <section className="relative overflow-hidden bg-[#07140B] pt-[112px] pb-16 sm:pb-20 text-white">
        <Image
          src="/assets/dubai_skyline_financial.png"
          alt="Dubai business skyline for company formation"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07140B]/95 via-[#07140B]/78 to-[#07140B]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-300">
                <Sparkles className="w-4 h-4" />
                Business Setup in Dubai
              </span>
              <div className="space-y-4">
                <h1 className="text-[42px] sm:text-[58px] lg:text-[68px] leading-[1.04] tracking-normal text-white font-semibold">
                  Business Setup in Dubai, Built Around Your Launch Plan
                </h1>
                <p className="max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-zinc-100/90">
                  Start your UAE company with a clear route for licensing, visas, tax registration, banking preparation, and ongoing compliance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openBlankModal}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(18,183,106,0.28)] transition-all hover:bg-emerald-400 hover:scale-[1.01] active:scale-95"
                >
                  Get a Setup Plan
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPage("calculator")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 active:scale-95"
                >
                  Estimate Setup Cost
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-2xl pt-2">
                {[
                  ["Mainland", "local market access"],
                  ["Free Zone", "remote-friendly setup"],
                  ["Offshore", "holding structures"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-md">
                    <div className="text-[13px] font-semibold text-white">{title}</div>
                    <div className="text-[10.5px] text-zinc-300 leading-tight mt-1">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 sm:p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[11px] text-emerald-300 font-semibold">Launch Desk Review</p>
                      <h2 className="text-[22px] font-semibold text-white mt-1">What your plan includes</h2>
                    </div>
                    <ShieldCheck className="w-8 h-8 text-emerald-300" />
                  </div>
                  {[
                    "Jurisdiction and activity recommendation",
                    "License, visa, and office requirement map",
                    "Document checklist and authority submission path",
                    "Corporate tax, VAT, and banking readiness notes",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[13px] text-zinc-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="rounded-2xl bg-white px-4 py-4 text-zinc-900">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <div>
                        <div className="text-[13px] font-semibold">Advisor callback under 15 minutes</div>
                        <div className="text-[11px] text-zinc-500">For submitted setup enquiries during live desk hours.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100 bg-white py-7">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Route", "mainland, free zone, or offshore"],
            ["Documents", "prepared before submission"],
            ["Banking", "KYC-ready file support"],
            ["Compliance", "tax and renewal roadmap"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50/70 px-4 py-4">
              <div className="text-[14px] font-semibold text-zinc-900">{title}</div>
              <div className="text-[12px] text-zinc-500 mt-1 leading-tight">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Who this page is for</span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-tight text-zinc-900">
              Choose the right Dubai company structure before you spend
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              A license is only one part of business setup in Dubai. The right structure should also consider visas, office needs, bank account approval, tax obligations, renewal costs, and where you plan to trade.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["First-time UAE founders", "Avoid choosing a license that blocks banking, visas, or mainland trading."],
              ["International owners", "Set up a UAE entity with clear shareholder, manager, and document requirements."],
              ["Consultants and agencies", "Compare free zone and mainland service licenses against client location and visa needs."],
              ["Trading companies", "Plan import, export, warehousing, customs, and commercial activity requirements early."],
              ["Holding companies", "Structure ownership, IP, real estate, or regional subsidiaries with the right vehicle."],
              ["Existing UAE companies", "Add visas, tax registration, banking, bookkeeping, or renewals to an active license."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_14px_35px_rgba(7,20,11,0.04)]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-3" />
                <h3 className="text-[16px] font-semibold text-zinc-900">{title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBF8] py-16 sm:py-20 border-y border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Setup routes</span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-tight text-zinc-900">
              Mainland, free zone, or offshore: what should you choose?
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              We compare the route against your activity, customers, visa count, banking profile, and compliance requirements before you commit to a registry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {setupRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <div key={route.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_rgba(7,20,11,0.05)] flex flex-col justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">{route.tag}</p>
                    <h3 className="text-[22px] font-semibold text-zinc-900 mt-2">{route.title}</h3>
                    <p className="text-[14px] text-zinc-500 leading-relaxed mt-3">{route.desc}</p>
                  </div>
                  <button
                    onClick={() => setPage(route.page)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-[13px] font-semibold text-zinc-800 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Explore route
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">What we handle</span>
            <h2 className="text-[30px] sm:text-[38px] font-semibold leading-tight text-zinc-900">
              Business setup services included in your launch desk
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              The goal is not just issuing a license. The goal is giving your company the setup foundation it needs to operate.
            </p>
            <button
              onClick={openBlankModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95"
            >
              Speak with an advisor
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              [Briefcase, "Activity and license selection", "Commercial, professional, industrial, e-commerce, media, holding, and consulting structures."],
              [Landmark, "Authority coordination", "Free zone, mainland, offshore, and supporting government portal requirements."],
              [FileCheck2, "Document preparation", "Shareholder files, forms, approvals, establishment records, and corporate document packs."],
              [Users, "Visa and establishment card", "Investor visa, employee visa, family visa, and establishment card planning."],
              [Scale, "Corporate tax and VAT readiness", "Registration triggers, recordkeeping, bookkeeping, and compliance calendar guidance."],
              [Banknote, "Bank account preparation", "KYC profile, business model notes, invoices, contracts, and supporting evidence for bank review."],
            ].map(([Icon, title, text]) => {
              const ServiceIcon = Icon as typeof Briefcase;
              return (
                <div key={title as string} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_14px_35px_rgba(7,20,11,0.04)]">
                  <ServiceIcon className="w-5 h-5 text-emerald-600 mb-3" />
                  <h3 className="text-[16px] font-semibold text-zinc-900">{title as string}</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mt-2">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Process</span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-tight">Dubai business setup process</h2>
            <p className="text-[15px] text-zinc-300 leading-relaxed">
              A practical formation roadmap from the first activity check to a company file ready for visas, tax, and banking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map(([num, title, text]) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[12px] font-semibold">{num}</div>
                <h3 className="text-[15px] font-semibold text-white mt-4 leading-tight">{title}</h3>
                <p className="text-[12px] text-zinc-400 leading-relaxed mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Costs</span>
              <h2 className="text-[30px] sm:text-[38px] font-semibold leading-tight text-zinc-900">
                What affects business setup cost in Dubai?
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed">
                Dubai company formation cost depends on more than the headline license fee. We build the estimate around the real setup path.
              </p>
            </div>
            <div className="space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-[14px] font-semibold text-zinc-900">{item.label}</div>
                  <div className="text-[13px] text-zinc-500 mt-1">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Documents</span>
              <h2 className="text-[30px] sm:text-[38px] font-semibold leading-tight text-zinc-900">
                Documents usually required
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed">
                Exact requirements vary by authority, shareholder profile, and activity. This is the typical starting checklist.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc) => (
                <div key={doc} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-zinc-600 leading-relaxed">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBF8] py-16 sm:py-20 border-y border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">Conversion support</span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-tight text-zinc-900">
              Build your company file for what happens after licensing
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              A weak setup file can slow down bank account opening, tax registration, visa processing, and renewals. We prepare the company profile with those next steps in mind.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ["Banking", "Business model note, expected turnover, contracts, invoices, and KYC narrative."],
              ["Tax and accounting", "Corporate tax registration guidance, VAT triggers, bookkeeping, and filing calendar."],
              ["Visas and PRO", "Investor visa, employee visa, Emirates ID, medical, and family sponsorship coordination."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white border border-zinc-200 p-5 shadow-[0_16px_40px_rgba(7,20,11,0.05)]">
                <h3 className="text-[18px] font-semibold text-zinc-900">{title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">FAQ</span>
            <h2 className="text-[30px] sm:text-[38px] font-semibold leading-tight text-zinc-900">
              Business setup in Dubai FAQs
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              Answers to the questions founders usually ask before choosing a UAE company structure.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-zinc-200 bg-white p-5 open:shadow-[0_16px_40px_rgba(7,20,11,0.05)]">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-[15px] font-semibold text-zinc-900">{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-[13.5px] text-zinc-500 leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Start with a clear plan</span>
              <h2 className="text-[30px] sm:text-[40px] font-semibold leading-tight">
                Ready to set up your company in Dubai?
              </h2>
              <p className="text-[15px] text-zinc-300 leading-relaxed max-w-3xl">
                Share your activity, shareholders, visa needs, and banking priorities. A senior advisor will map the right route before you commit to a license package.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={openBlankModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(18,183,106,0.24)] transition-all hover:bg-emerald-400 active:scale-95"
              >
                Request a Callback
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
