import { packages } from "@/lib/data";

export default function PackagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Feature Business Profile Packages</h1>
      <p className="text-stone-600 mb-10 max-w-3xl">
        Whether you want to establish your presence, tell more of your story or maximize your local visibility, there's a solution designed to help customers discover and connect with your business.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`bg-white rounded-xl p-6 border-2 ${pkg.highlight ? "border-amber-400 relative" : "border-stone-200"}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
            )}
            <h2 className="text-2xl font-bold mb-1">{pkg.name}</h2>
            <div className="text-xl font-semibold mb-2">{pkg.price}</div>
            <p className="text-stone-600 mb-6">{pkg.tagline}</p>
            <div className="mb-6">
              <div className="font-medium mb-2">Includes:</div>
              <ul className="text-sm space-y-1 text-stone-700">
                {pkg.includes.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-1">Best for:</div>
              <p className="text-sm text-stone-600">{pkg.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
