import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar/navbar";
export const metadata: Metadata = {
  title: "الصفحات الرئيسية",
  description: "الصفحات الرئيسية للتطبيق",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
