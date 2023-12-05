import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adarsh",
  description: "UI & UX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0A0A0A]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
