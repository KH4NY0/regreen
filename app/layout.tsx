import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regreen",
  description: "Transform your home with Regreen's curated eco-friendly essentials, delivered monthly. Join thousands making sustainable living simple. Start your free trial today and reduce your environmental impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
