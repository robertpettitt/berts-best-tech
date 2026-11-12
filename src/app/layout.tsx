import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bert's Best Tech | Friendly Tech Help in the Fox Valley",
  description:
    "Friendly computer, Wi-Fi, security camera, AI automation, and business intelligence services for homes and small businesses in Wisconsin's Fox Valley.",
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
