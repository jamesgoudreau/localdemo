import Link from "next/link";
import { businesses, categories } from "@/lib/data";

export default function Home() {
  const featured = businesses.filter((b) => b.package === "premium");

  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Find local businesses and offers in Regina
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
          Your trusted local resource from the Leader-Post. Discover businesses, coupons, community notices, and more.
        </p>
        <div className="max-w-xl mx-auto">
          <input
            type="search"
            placeholder="Search businesses, services, or categories..."
            className="w-full px-4 py-3 border border-stone-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Browse by category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/directory?category=${encodeURIComponent(cat.name)}`}
              className="bg-white border border-stone-200 rounded-lg p-4 hover:border-amber-400 transition"
            >
              <div className="font-medium">{cat.name}</div>
              <div className="text-sm text-stone-500">{cat.count} businesses</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured businesses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((b) => (
            <Link
              key={b.slug}
              href={`/business/${b.slug}`}
              className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="text-xs uppercase tracking-wide text-amber-600 mb-1">{b.category}</div>
              <h3 className="text-xl font-semibold mb-2">{b.name}</h3>
              <p className="text-stone-600 text-sm mb-3">{b.description}</p>
              <div className="text-sm text-stone-500">{b.address}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border border-stone-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Own a local business?</h2>
        <p className="text-stone-600 mb-6">Get found by Regina customers with a Leader-Post Local profile.</p>
        <Link
          href="/packages"
          className="inline-block bg-stone-900 text-white px-6 py-3 rounded font-medium hover:bg-stone-800"
        >
          View packages
        </Link>
      </section>
    </div>
  );
}
