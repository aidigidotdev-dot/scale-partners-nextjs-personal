import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Scale Partners | UAE Corporate Advisory Desk",
  description:
    "Contact Scale Partners for UAE company formation, DMCC setup, visas, banking readiness, tax, renewal, and ongoing compliance advisory.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Scale Partners | UAE Corporate Advisory",
    description:
      "Speak with a Scale Partners advisor about UAE company setup, visas, banking readiness, tax, renewal, and compliance.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
