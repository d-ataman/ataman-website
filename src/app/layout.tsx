import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const raleway = Raleway({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duygu Ataman",
  description: "Personal website of Duygu Ataman",
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
