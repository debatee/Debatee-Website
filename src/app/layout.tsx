import type { Metadata } from "next";
import { inter } from '@/app/fonts/fonts';
import "./styles/globals.css";
import NavHeader from "./_components/navigation/bars/header/nav-header";

export const metadata: Metadata = {
  title: "Debatee",
  description: "Master the Art of Debating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white`}
      >
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
