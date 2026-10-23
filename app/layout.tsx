import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEST JOB | Find work that moves you forward",
  description: "Discover career opportunities, explore trusted employers, and take your next step with BEST JOB.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
