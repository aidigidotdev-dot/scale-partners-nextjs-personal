import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Scale Partners Corporate Advisory",
  description:
    "Scale Partners Privacy Policy covering website enquiries, advisory intake, communications, cookies, service providers, retention, and privacy requests.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Scale Partners",
    description:
      "How Scale Partners handles website enquiries, advisory intake details, communications, cookies, and privacy requests.",
    url: "/privacy-policy",
    type: "website",
  },
};

const policySections = [
  {
    title: "Information We Collect",
    text: "We collect information that helps us respond to enquiries, prepare advisory recommendations, and coordinate corporate services.",
    items: [
      "Contact details such as name, email address, phone number, WhatsApp number, and preferred communication channel.",
      "Business details such as proposed activity, jurisdiction interest, shareholder structure, visa needs, office preference, and banking requirements.",
      "Quote or calculator inputs submitted through the website, including selected activity, jurisdiction, visa count, and workspace option.",
      "Communication records from forms, email, phone calls, WhatsApp, CRM notes, and meeting follow-ups.",
      "Basic technical data such as browser, device, IP address, pages visited, cookie preferences, and analytics events where permitted.",
    ],
  },
  {
    title: "How We Use Your Information",
    text: "We use information for legitimate advisory, operational, and compliance purposes connected to your enquiry or client relationship.",
    items: [
      "To respond to enquiries and schedule advisory calls.",
      "To assess suitable UAE company formation, licensing, visa, office, banking, tax, and renewal routes.",
      "To prepare proposals, cost estimates, checklists, document requests, and service timelines.",
      "To maintain CRM records, manage follow-ups, and improve advisory quality.",
      "To comply with applicable authority, anti-fraud, record-keeping, and professional obligations.",
    ],
  },
  {
    title: "Cookies And Website Analytics",
    text: "The website may use cookies, analytics tools, CRM tracking, and communication widgets to improve performance and understand enquiry quality.",
    items: [
      "Essential cookies support website operation and consent preferences.",
      "Analytics and CRM tools may help measure page performance, form interaction, and marketing attribution.",
      "You can manage supported cookie preferences through the cookie settings banner where available.",
    ],
  },
  {
    title: "How We Share Information",
    text: "We do not sell personal information. We share it only where needed to deliver services, operate the website, or meet legal and regulatory duties.",
    items: [
      "With internal advisors and operations staff who need the information to support your enquiry or engagement.",
      "With trusted service providers such as CRM, email, hosting, analytics, communication, payment, or document management providers.",
      "With UAE authorities, free zones, banks, auditors, tax advisors, visa processing providers, or related professional parties when required for an instructed service.",
      "With regulators, legal advisors, or enforcement bodies where disclosure is required or reasonably necessary.",
    ],
  },
  {
    title: "Retention",
    text: "We keep information only for as long as reasonably required for enquiry handling, client service delivery, legal obligations, dispute handling, audit, and business record purposes.",
    items: [
      "General enquiry records may be retained to manage follow-ups and service history.",
      "Client engagement records may be retained for longer where authority, tax, banking, audit, or legal obligations require it.",
      "You may request deletion or update of eligible information, subject to lawful retention requirements.",
    ],
  },
  {
    title: "Your Choices And Rights",
    text: "Depending on your location and applicable law, you may have rights to access, correct, update, restrict, object to, or request deletion of certain personal information.",
    items: [
      "You can ask us to correct inaccurate contact or business details.",
      "You can unsubscribe from non-essential marketing communications where such communications are sent.",
      "You can contact us to discuss privacy requests or concerns using the details below.",
    ],
  },
  {
    title: "Security",
    text: "We use reasonable administrative, technical, and organizational measures to protect information against unauthorized access, misuse, loss, or disclosure.",
    items: [
      "No website, email, CRM, or internet transmission can be guaranteed completely secure.",
      "Sensitive company or shareholder documents should be sent through channels agreed with your advisor.",
    ],
  },
  {
    title: "International Processing",
    text: "Because advisory, technology, banking, and authority workflows may involve service providers or platforms in different jurisdictions, your information may be processed outside your country of residence.",
    items: [
      "Where this occurs, we aim to use reasonable safeguards and share only what is needed for the relevant purpose.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-fade-in bg-white text-zinc-950">
      <section className="bg-[#07140B] pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-200">
            <LockKeyhole className="h-3.5 w-3.5" />
            Privacy Policy
          </div>
          <h1 className="hero-brand-headline mt-6 max-w-4xl text-[42px] sm:text-[58px] lg:text-[70px] leading-[1.04] tracking-normal text-white">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] sm:text-[17px] leading-[1.8] text-white/70">
            This policy explains how Scale Partners handles personal and business information submitted through our website, advisory forms, communication channels, and corporate service intake.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-[12px] text-white/64">
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2">Effective Date: June 24, 2026</span>
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2">Website And Advisory Intake</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="rounded-[28px] border border-sp-border bg-sp-mintBg p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sp-emerald shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-zinc-650">
                This policy is for website and advisory intake use. It does not replace a signed engagement letter, proposal, data processing agreement, or authority-specific requirement that may apply once services begin.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {policySections.map((section, index) => (
              <section key={section.title} className="rounded-[24px] border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_14px_45px_rgba(11,46,22,0.045)]">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-sp-emerald">Section {String(index + 1).padStart(2, "0")}</div>
                <h2 className="mt-3 text-[26px] sm:text-[32px] leading-tight text-sp-forest">{section.title}</h2>
                <p className="mt-4 text-[14px] leading-[1.85] text-zinc-600">{section.text}</p>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[13.5px] leading-relaxed text-zinc-650">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sp-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-[28px] bg-[#07140B] p-6 sm:p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3 text-emerald-300">
                  <Mail className="h-5 w-5" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em]">Privacy Contact</span>
                </div>
                <h2 className="mt-4 text-[28px] sm:text-[36px] leading-tight text-white">Questions About Your Information</h2>
                <p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-white/66">
                  Contact Scale Partners Corporate Advisory at info@fourroadsgroup.com or WhatsApp +971 55 205 1241. Our office is 1703, Conrad Tower, World Trade Center, Dubai.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-sp-forest transition-all hover:scale-[1.015]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 text-sp-emerald" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
