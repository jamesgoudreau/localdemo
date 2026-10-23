import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import AuthGate from "@/components/AuthGate";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leader-Post Local | Regina",
  description: "Your local resource for businesses, offers, notices, and community in Regina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-stone-50 text-stone-900 antialiased`}>
        <AuthGate>
          <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  LP
                </div>
                <div>
                  <div className="font-semibold text-lg">Leader-Post Local</div>
                  <div className="text-xs text-stone-500">Regina & Area</div>
                </div>
              </div>
              <nav className="hidden md:flex gap-6 text-sm">
                <a href="/" className="hover:text-amber-600">Home</a>
                <a href="/directory" className="hover:text-amber-600">Directory</a>
                <a href="/packages" className="hover:text-amber-600">For Businesses</a>
                <a href="/coupons" className="hover:text-amber-600">Offers</a>
                <a href="/notices" className="hover:text-amber-600">Notices</a>
                <a href="/calendar" className="hover:text-amber-600">Calendar</a>
              </nav>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
          <footer className="border-t border-stone-200 mt-16 py-8 text-center text-sm text-stone-500">
            <p>Leader-Post Local is a demonstration of local resources for Regina. Listing data inspired by local directories. Credit to Yellow Pages for partnership data model.</p>
            <p className="mt-2">A Postmedia Network property. Editorial ethos preserved.</p>
          </footer>
        </AuthGate>
      </body>
    </html>
  );
}
