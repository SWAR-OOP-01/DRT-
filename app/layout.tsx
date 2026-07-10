import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Deep Relief Therapy — Not a spa experience—it's a therapeutic experience",
  description:
    "Deep Relief Therapy (DRT) — a premium therapeutic wellness space helping you improve performance, boost productivity, and reconnect with body and mind.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/drt-emblem-green.png", type: "image/png" }],
    apple: "/drt-emblem-green.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  );
}
