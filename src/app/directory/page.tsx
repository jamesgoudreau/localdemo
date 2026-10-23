"use client";

import Link from "next/link";
import { useState } from "react";
import { businesses, categories } from "@/lib/data";

export default function Directory() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = businesses.filter((b) => {
    const matchesQuery = !query || b.name.toLowerCase().includes(query.toLowerCase()) || b.description.toLowerCase().includes(query.toLowerCase());
    const matchesCat = !selectedCategory || b.category === selectedCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Local Regina Directory</h1>
      <p className="text-stone-600 mb-6">Find trusted local businesses. Listings provided in partnership with Yellow Pages.</p>

      <div className="mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search businesses, services, or categories..."
          className="w-full max-w-xl px-4 py-3 border border-stone-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <h2 className="font-medium mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => setSelectedCategory("")} className={!selectedCategory ? "text-amber-600 font-medium" : "hover:text-amber-600"}>
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.name}>
                <button
                  onClick={() => setSelectedCategory(cat.name)}
                  className={selectedCategory === cat.name ? "text-amber-600 font-medium" : "hover:text-amber-600"}
                >
                  {cat.name} ({cat.count})
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="md:col-span-3 space-y-4">
          {filtered.length === 0 && <p className="text-stone-500">No businesses match your search.</p>}
          {filtered.map((b) => (
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
