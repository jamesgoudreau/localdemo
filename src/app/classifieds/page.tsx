import { classifieds } from "@/lib/data";

export default function ClassifiedsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Classifieds</h1>
      <div className="space-y-4">
        {classifieds.map((c, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="font-semibold">{c.title}</div>
            <div className="text-amber-700">{c.price}</div>
            <div className="text-sm text-stone-500">{c.contact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
