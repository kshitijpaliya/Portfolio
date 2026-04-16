import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kshitijpaliya.fun"), // ✅ FIX

  title: "Kshitij Paliya",
  description:
    "Portfolio of Kshitij Paliya — Full Stack Developer specializing in MERN, Next.js, AWS, Backend and Cloud technologies.",

  keywords: [
    "Kshitij Paliya",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "Real-Time Systems",
    "MERN",
    "Next.js",
    "AWS",
    "Node.js",
    "React",
    "Portfolio",
  ],

  authors: [{ name: "Kshitij Paliya" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Kshitij Paliya",
    description:
      "Full Stack Developer specializing in Next.js, AWS, frontend and backend technologies.",
    url: "https://kshitijpaliya.fun", // ✅ ADD THIS
    siteName: "Kshitij Portfolio", // ✅ ADD THIS
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/image.jpg", // now resolves to full domain automatically
        width: 1200,
        height: 630,
        alt: "Kshitij Paliya Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kshitij Paliya",
    description:
      "Full Stack Developer specializing in Next.js, AWS, frontend and backend technologies.",
    images: ["/image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
