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
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <a href="/" className="flex items-center">
                <img
                  src="/leaderpost-logo.svg"
                  alt="Regina Leader-Post"
                  className="h-10 w-auto"
                />
              </a>
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
          <footer className="border-t border-stone-200 mt-16">
            <div className="bg-black text-white text-xs py-2 px-4">
              {/* top black bar */}
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <div className="font-semibold uppercase tracking-wide text-xs mb-3">Navigate</div>
                <ul className="space-y-2 text-stone-600">
                  <li><a href="#" className="hover:text-amber-600">Saskatchewan News</a></li>
                  <li><a href="#" className="hover:text-amber-600">Local News</a></li>
                  <li><a href="#" className="hover:text-amber-600">Business</a></li>
                  <li><a href="#" className="hover:text-amber-600">Sports</a></li>
                  <li><a href="#" className="hover:text-amber-600">Arts & Life</a></li>
                  <li><a href="#" className="hover:text-amber-600">Opinion</a></li>
                  <li><a href="#" className="hover:text-amber-600">Top Employers</a></li>
                  <li><a href="#" className="hover:text-amber-600">Puzzmo</a></li>
                  <li><a href="#" className="hover:text-amber-600">Comics</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold uppercase tracking-wide text-xs mb-3">Services</div>
                <ul className="space-y-2 text-stone-600">
                  <li><a href="#" className="hover:text-amber-600">Contact Us</a></li>
                  <li><a href="/packages" className="hover:text-amber-600">Advertise With Us</a></li>
                  <li><a href="#" className="hover:text-amber-600">Manage My Subscriptions</a></li>
                  <li><a href="#" className="hover:text-amber-600">FAQ</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold uppercase tracking-wide text-xs mb-3">More from the Leader-Post</div>
                <ul className="space-y-2 text-stone-600">
                  <li><a href="#" className="hover:text-amber-600">Newsletters</a></li>
                  <li><a href="/classifieds" className="hover:text-amber-600">Classifieds</a></li>
                  <li><a href="#" className="hover:text-amber-600">Car News & Reviews</a></li>
                  <li><a href="#" className="hover:text-amber-600">Personal Health</a></li>
                  <li><a href="#" className="hover:text-amber-600">Canoe - Travel</a></li>
                  <li><a href="#" className="hover:text-amber-600">Canoe - Shopping</a></li>
                  <li><a href="#" className="hover:text-amber-600">Leader-Post Store</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold uppercase tracking-wide text-xs mb-3">Legal</div>
                <ul className="space-y-2 text-stone-600">
                  <li><a href="#" className="hover:text-amber-600">Sitemap</a></li>
                  <li><a href="#" className="hover:text-amber-600">Copyright & Licensing</a></li>
                  <li><a href="#" className="hover:text-amber-600">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-amber-600">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-amber-600">Community Guidelines</a></li>
                  <li><a href="#" className="hover:text-amber-600">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center py-6">
              <div className="text-2xl font-serif font-bold tracking-wide">THE LEADER-POST</div>
            </div>
            <div className="border-t border-stone-200 py-4 px-4 text-xs text-stone-500 flex justify-between max-w-7xl mx-auto">
              <span>© Copyright & Licensing 2026, Postmedia Network Inc.</span>
              <span>All rights reserved.</span>
            </div>
          </footer>
        </AuthGate>
      </body>
    </html>
  );
}
