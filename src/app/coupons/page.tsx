import { coupons } from "@/lib/data";

export default function CouponsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Local Offers & Coupons</h1>
      <div className="space-y-4">
        {coupons.map((c, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="font-semibold">{c.business}</div>
            <div className="text-lg text-amber-700 my-1">{c.offer}</div>
            <div className="text-sm text-stone-500">Code: {c.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
