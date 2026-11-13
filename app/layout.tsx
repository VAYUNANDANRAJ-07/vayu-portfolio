import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vayu // Signal 28",
  description:
    "Portfolio of Bodasu Vayunandan Raj — ECE student exploring software development, embedded systems, IoT and digital technology.",
  keywords: [
    "Vayu",
    "Bodasu Vayunandan Raj",
    "ECE",
    "Software Development",
    "Embedded Systems",
    "IoT",
    "Portfolio",
  ],
  authors: [{ name: "Bodasu Vayunandan Raj" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}