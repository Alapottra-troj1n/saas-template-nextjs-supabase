import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const  poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Storybook AI",
  description: "AI powered educational story generator for kids",
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
        {children}
      </body>
    </html>
  );
}
