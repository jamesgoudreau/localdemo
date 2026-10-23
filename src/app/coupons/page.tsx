"use client";

import { coupons } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function CouponsPage() {
  const [openCoupon, setOpenCoupon] = useState<number | null>(null);

  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Local Offers & Coupons</h1>
          <p className="text-stone-600">Click a coupon to open and print.</p>
        </div>
        <Link href="/packages" className="text-sm text-amber-700 hover:underline">
          Create an offer for your business
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((c, i) => (
          <button
            key={i}
            onClick={() => setOpenCoupon(i)}
            className="text-left bg-white border-2 border-dashed border-amber-400 rounded-lg p-5 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 ${c.color} rounded-full flex items-center justify-center font-bold text-white text-sm`}>
                {c.logo}
              </div>
              <div className="font-semibold">{c.business}</div>
            </div>
            <div className="text-lg text-amber-700 font-medium my-2">{c.offer}</div>
            <div className="text-sm text-stone-500">Code: {c.code}</div>
            <div className="text-xs text-stone-400 mt-2">Expires {c.expires}</div>
          </button>
        ))}
      </div>

      {openCoupon !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setOpenCoupon(null)}>
          <div className="bg-white max-w-md w-full rounded-lg p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenCoupon(null)} className="absolute top-3 right-3 text-stone-400 hover:text-stone-600">✕</button>
            <div className="border-4 border-dashed border-amber-400 p-6 text-center">
              <div className="text-xs uppercase tracking-widest text-amber-600 mb-2">Coupon</div>
              <div className={`w-16 h-16 ${coupons[openCoupon].color} rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white`}>
                {coupons[openCoupon].logo}
              </div>
              <div className="font-bold text-xl mb-1">{coupons[openCoupon].business}</div>
              <div className="text-lg text-amber-700 font-medium mb-4">{coupons[openCoupon].offer}</div>
              <div className="bg-stone-100 inline-block px-4 py-2 rounded font-mono text-lg mb-4">{coupons[openCoupon].code}</div>
              <div className="text-sm text-stone-500">Expires {coupons[openCoupon].expires}</div>
              <button onClick={() => window.print()} className="mt-6 bg-stone-900 text-white px-6 py-2 rounded text-sm">
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
