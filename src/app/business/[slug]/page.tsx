import { businesses } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business = businesses.find((b) => b.slug === params.slug);
  if (!business) notFound();

  return (
    <div className="max-w-3xl">
      <div className="text-sm text-amber-600 mb-2">{business.category}</div>
      <h1 className="text-4xl font-semibold mb-4">{business.name}</h1>
      <p className="text-lg text-stone-600 mb-6">{business.description}</p>
      <div className="bg-white border border-stone-200 rounded-lg p-6 space-y-3">
        <div><strong>Address:</strong> {business.address}</div>
        <div><strong>Phone:</strong> {business.phone}</div>
        <div><strong>Hours:</strong> {business.hours}</div>
        <div><strong>Website:</strong> <a href={business.website} className="text-amber-600 hover:underline">{business.website}</a></div>
        <div>
          <strong>Services:</strong>
          <ul className="list-disc list-inside mt-1">
            {business.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 text-sm">
        <Link href="/packages" className="text-amber-700 hover:underline">Own this business? Upgrade your listing</Link>
      </div>
    </div>
  );
}
