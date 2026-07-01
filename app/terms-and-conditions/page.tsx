import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSignature, Mail, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Scale Partners Corporate Advisory",
  description:
    "Scale Partners Terms and Conditions covering website use, advisory information, quotations, client responsibilities, authority coordination, payments, and limitations.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Scale Partners",
    description:
      "Terms for using the Scale Partners website and advisory information relating to UAE corporate services.",
    url: "/terms-and-conditions",
    type: "website",
  },
};

const termsSections = [
  {
    title: "Use Of This Website",
    text: "This website is provided by Scale Partners Corporate Advisory for general corporate services information, enquiry handling, and advisory intake.",
    items: [
      "You agree to use the website lawfully and not to interfere with its security, availability, forms, CRM tools, or communication features.",
      "You must not submit false, misleading, unlawful, or unauthorized information through the website.",
      "We may update, suspend, or remove website content, pages, forms, or tools without prior notice.",
    ],
  },
  {
    title: "Advisory Information",
    text: "Website content is general information only. UAE company formation, licensing, visas, banking, tax, office, and renewal requirements depend on the activity, authority, shareholder file, and current rules.",
    items: [
      "Nothing on the website is legal, tax, financial, immigration, or banking advice unless confirmed in a signed engagement.",
      "Authority rules, bank onboarding criteria, government fees, timelines, and document requirements can change.",
      "You should obtain specific advice before making commercial, tax, legal, or immigration decisions.",
    ],
  },
  {
    title: "Quotations And Cost Estimates",
    text: "Any quotation, package, calculator output, or cost estimate shown on the website or shared during enquiry handling is indicative unless confirmed in a written proposal.",
    items: [
      "Authority fees, office fees, visa fees, third-party charges, government charges, courier fees, bank charges, and tax can vary.",
      "Quoted totals may change if the activity, shareholder structure, visa requirement, office route, urgency, or authority request changes.",
      "A final service scope, fee schedule, and payment requirement should be confirmed before work begins.",
    ],
  },
  {
    title: "Client Responsibilities",
    text: "You are responsible for providing accurate, complete, current, and lawful information for any enquiry, proposal, application, or service.",
    items: [
      "You must review documents, application details, ownership information, UBO details, and declarations before submission.",
      "You must disclose regulated activities, sanctions concerns, criminal history, prior rejections, existing UAE records, and banking sensitivities where relevant.",
      "Delays or rejections may occur if information is incomplete, inaccurate, inconsistent, or not accepted by an authority, bank, or third party.",
    ],
  },
  {
    title: "Authority And Third-Party Decisions",
    text: "Scale Partners may coordinate with UAE authorities, free zones, government departments, banks, auditors, tax advisors, visa providers, and other professional parties where instructed.",
    items: [
      "Approvals, licenses, visas, bank accounts, renewals, amendments, refunds, and timelines remain subject to the relevant authority or third-party decision.",
      "We cannot guarantee approval, processing time, banking acceptance, visa issuance, or a specific authority outcome.",
      "Third-party terms, fees, rules, and compliance checks may apply separately.",
    ],
  },
  {
    title: "Payments And Refunds",
    text: "Payment terms, government fees, professional fees, third-party fees, and refund rules are governed by the applicable proposal, invoice, authority rule, and service scope.",
    items: [
      "Some government, authority, banking, office, visa, and third-party fees may be non-refundable once submitted or committed.",
      "Work may pause if requested documents, approvals, payments, or client confirmations are delayed.",
      "Any refund request will be reviewed against work completed, third-party commitments, and the applicable written terms.",
    ],
  },
  {
    title: "Confidentiality And Documents",
    text: "We treat client information and documents with professional care, subject to lawful disclosure, instructed service delivery, and operational requirements.",
    items: [
      "You should send sensitive documents only through agreed channels and confirm document versions before submission.",
      "We may retain copies of submitted documents and correspondence for service, compliance, audit, legal, and record-keeping purposes.",
      "We may be required to share documents with authorities, banks, or professional parties involved in the instructed service.",
    ],
  },
  {
    title: "Limitation Of Liability",
    text: "To the maximum extent permitted by applicable law, Scale Partners is not liable for indirect, incidental, consequential, special, punitive, or loss-of-profit damages arising from website use or reliance on general website information.",
    items: [
      "We are not responsible for authority, bank, government, hosting, communication, payment, CRM, analytics, or third-party platform outages or decisions.",
      "We are not responsible for losses caused by inaccurate client information, delayed client action, incomplete disclosures, or rejected third-party decisions.",
      "Any liability connected to a paid engagement is subject to the written engagement terms agreed for that service.",
    ],
  },
  {
    title: "Changes To These Terms",
    text: "We may update these Terms and Conditions from time to time. The version displayed on this page applies to website use from the effective date shown.",
    items: [
      "Continued use of the website after updates means you accept the updated terms.",
      "Separate signed proposals, engagement letters, or authority forms may contain additional or different terms.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="animate-fade-in bg-white text-zinc-950">
      <section className="bg-[#07140B] pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-200">
            <FileSignature className="h-3.5 w-3.5" />
            Terms & Conditions
          </div>
          <h1 className="hero-brand-headline mt-6 max-w-4xl text-[42px] sm:text-[58px] lg:text-[70px] leading-[1.04] tracking-normal text-white">
            Terms & Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] sm:text-[17px] leading-[1.8] text-white/70">
            These terms govern use of the Scale Partners website and general advisory information connected to UAE company formation, licensing, visas, banking readiness, tax, renewal, and compliance services.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-[12px] text-white/64">
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2">Effective Date: June 24, 2026</span>
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2">Website Terms</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="rounded-[28px] border border-sp-border bg-sp-mintBg p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sp-emerald shadow-sm">
                <Scale className="h-5 w-5" />
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-zinc-650">
                By using this website or submitting an enquiry, you agree to these Terms and Conditions. If you become a client, the signed proposal, invoice, or engagement terms for that service will also apply.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {termsSections.map((section, index) => (
              <section key={section.title} className="rounded-[24px] border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_14px_45px_rgba(11,46,22,0.045)]">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-sp-emerald">Term {String(index + 1).padStart(2, "0")}</div>
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
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em]">Terms Contact</span>
                </div>
                <h2 className="mt-4 text-[28px] sm:text-[36px] leading-tight text-white">Questions About These Terms</h2>
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
