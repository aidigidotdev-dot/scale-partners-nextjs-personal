"use client";

import ContactForm from "@/src/components/ContactForm";
import { useQuote } from "@/src/components/QuoteProvider";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 55 205 1241",
    href: "https://wa.me/971552051241",
  },
  {
    icon: Phone,
    label: "Landline",
    value: "04-360-7999",
    href: "tel:+97143607999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fourroadsgroup.com",
    href: "mailto:info@fourroadsgroup.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "1703, Conrad Tower, World Trade Center, Dubai",
    href: "https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111",
  },
];

export default function ContactPageClient() {
  const { quoteBreakdown, quoteSelection } = useQuote();

  return (
    <div className="animate-fade-in bg-white text-zinc-950">
      <section className="relative overflow-hidden bg-sp-mintBg pt-32 pb-14 sm:pt-36 sm:pb-18">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sp-border bg-white px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-sp-emerald">
                <span className="h-2 w-2 rounded-full bg-sp-emerald" />
                Advisory Desk
              </div>
              <h1 className="hero-brand-headline mt-6 max-w-3xl text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.03] tracking-normal text-sp-forest">
                Contact Scale Partners
              </h1>
              <p className="mt-5 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] text-zinc-600">
                Speak with an advisor about company formation, visas, banking, tax, renewals, DMCC setup, or ongoing UAE compliance.
              </p>
            </div>

            <div className="rounded-[28px] border border-sp-border bg-white p-5 sm:p-6 shadow-[0_20px_70px_rgba(11,46,22,0.08)]">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sp-glass text-sp-emerald">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[18px] leading-tight text-sp-forest">Priority Response</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-zinc-500">Advisor callback within business hours.</div>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-4 transition-all hover:border-emerald-200 hover:bg-white hover:shadow-[0_14px_36px_rgba(11,46,22,0.06)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sp-emerald shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-sp-sage">{item.label}</div>
                          <div className="mt-1 text-[13px] leading-snug text-zinc-700 group-hover:text-sp-forest">{item.value}</div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-7 lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-sp-border bg-white shadow-[0_24px_90px_rgba(11,46,22,0.08)]">
            <ContactForm preloadedQuote={quoteBreakdown} preloadedSelections={quoteSelection} />
          </div>
        </div>
      </section>
    </div>
  );
}
