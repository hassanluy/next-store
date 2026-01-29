import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "صفحة تسجيل الدخول",
  description: "صفحة تسجيل الدخول للمستخدمين",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
