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
  title: "Ashwin Cheripally | Aspiring Robotics Engineer & Social Impact Leader",
  description: "Personal profile of Ashwin Cheripally - 10th grade student passionate about robotics, mechatronics, and educational equity. Founder of Cheri Foundation, Plaksha YTS 2025 participant, and Mars Society competition finalist.",
  keywords: [
    "Ashwin Cheripally",
    "Robotics",
    "Mechatronics",
    "MIT",
    "Plaksha YTS",
    "Mars Society",
    "Cheri Foundation",
    "STEM",
    "Education",
    "Social Impact"
  ],
  authors: [{ name: "Ashwin Cheripally" }],
  openGraph: {
    title: "Ashwin Cheripally | Aspiring Robotics Engineer",
    description: "Building technology for impact. Aspiring MIT student passionate about robotics and educational equity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Cheripally | Aspiring Robotics Engineer",
    description: "Building technology for impact. Aspiring MIT student passionate about robotics and educational equity.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
