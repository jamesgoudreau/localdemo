import Link from "next/link";
import { businesses, categories } from "@/lib/data";

export default function Directory() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Local Regina Directory</h1>
      <p className="text-stone-600 mb-8">Find trusted local businesses. Listings provided in partnership with Yellow Pages.</p>

      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <h2 className="font-medium mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link href={`/directory?category=${encodeURIComponent(cat.name)}`} className="hover:text-amber-600">
                  {cat.name} ({cat.count})
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="md:col-span-3 space-y-4">
          {businesses.map((b) => (
            <Link
              key={b.slug}
              href={`/business/${b.slug}`}
              className="block bg-white border border-stone-200 rounded-lg p-5 hover:border-amber-300 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{b.name}</h3>
                  <p className="text-sm text-stone-500">{b.category} • {b.address}</p>
                  <p className="text-sm text-stone-600 mt-2">{b.description}</p>
                </div>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">{b.package}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
