import type { Metadata } from "next";
import PagesWrapper from "@/components/PagesWrapper";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const websiteUrl = 'https://courtavenue.com/';

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: "CourtAvenue helps brands create meaningful engagements through elevated digital experiences and end-to-end journeys.",
  description:
    "CourtAvenue creates experiences through strategy, human-centered design &amp; cutting-edge technology that provide meaningful opportunities for our clients, ourselves and the world. We are entrepreneurs, agency veterans, and business experts helping the largest and most ambitious brands accelerate their digital transformations.",
  openGraph: {
    title: "CourtAvenue helps brands create meaningful engagements through elevated digital experiences and end-to-end journeys.",
    description:
      "CourtAvenue creates experiences through strategy, human-centered design &amp; cutting-edge technology that provide meaningful opportunities for our clients, ourselves and the world. We are entrepreneurs, agency veterans, and business experts helping the largest and most ambitious brands accelerate their digital transformations.",
    url: websiteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PagesWrapper>
      <SmoothScrolling>{children}</SmoothScrolling>
    </PagesWrapper>
  );
}
