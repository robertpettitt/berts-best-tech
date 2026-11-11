import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bert's Best Tech | Friendly Tech Help in the Fox Valley",
  description:
    "Patient, down-to-earth computer, Wi-Fi, and everyday tech help for homes and small businesses across Wisconsin's Fox Valley.",
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
