import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/gqp-security-systems"),
  title: "GQP Security Systems | Huddersfield CCTV & Alarms",
  description:
    "Huddersfield security systems installer for CCTV, intruder alarms, fire systems, access control, AV, lighting and door bell work.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "GQP Security Systems | Huddersfield CCTV & Alarms",
    description:
      "Security systems in Huddersfield: CCTV, intruder alarms, fire, access control, AV installations, lighting and door bells.",
    url: "https://deanooooooooo.github.io/gqp-security-systems/",
    images: ["/assets/hero-security-install.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GQP Security Systems | Huddersfield CCTV & Alarms",
    description:
      "CCTV, intruder alarm, fire, access control, AV, lighting and door bell work in Huddersfield.",
    images: ["/assets/hero-security-install.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
