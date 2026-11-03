
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arihant Staffing | Recruitment & Workforce Solutions",
    template: "%s | Arihant Staffing",
  },
  description:
    "Arihant Staffing provides end-to-end recruitment, HR solutions, IT staffing, healthcare staffing, Global Capability Center (GCC) solutions, and Recruitment Process Outsourcing (RPO) to help businesses build skilled, reliable, and future-ready teams.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  applicationName: "Arihant Staffing",
  keywords: [
    "Arihant Staffing",
    "Staffing Agency",
    "Recruitment Solutions",
    "HR Solutions",
    "IT Staffing",
    "Healthcare Staffing",
    "RPO Services",
    "Global Capability Center",
    "Talent Acquisition",
    "Workforce Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
