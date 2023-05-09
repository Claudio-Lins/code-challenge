import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Affinity",
  description: "Code-chalenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body
        className={`antialiased bg-zinc-950 
        ${inter.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
