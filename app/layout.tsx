import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "强盛智云",
  description: "更大,更强,更快,更好",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  );
}
