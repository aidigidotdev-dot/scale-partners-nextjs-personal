import type { Metadata } from "next";
import BusinessSetupDubaiPage from "@/src/components/BusinessSetupDubaiPage";

export const metadata: Metadata = {
  title: "Business Setup in Dubai | Company Formation UAE | Scale Partners",
  description:
    "Set up a business in Dubai with mainland, free zone, or offshore company formation guidance. Get licensing, visa, tax, banking, and compliance support from Scale Partners UAE.",
  alternates: {
    canonical: "/business-setup-dubai",
  },
  openGraph: {
    title: "Business Setup in Dubai | Scale Partners UAE",
    description:
      "A detailed guide and advisory page for Dubai company formation, licensing routes, visas, banking preparation, and compliance support.",
    url: "/business-setup-dubai",
    type: "website",
  },
};

export default function BusinessSetupDubaiRoute() {
  return <BusinessSetupDubaiPage />;
}
