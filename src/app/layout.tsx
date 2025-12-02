import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";


const  poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Our Saas Template",
  description: "A starter template for SaaS applications using Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning
        className={`${poppins.variable} antialiased` }
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
