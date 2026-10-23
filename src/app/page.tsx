import Link from "next/link";
import { businesses } from "@/lib/data";

const localFeed = [
  {
    source: "Leader-Post",
    time: "2 days ago",
    title: "Regina’s 11th Avenue construction declared complete and under budget: city",
    summary: "The city says final cosmetic touches are all that's left and will be done by next spring.",
    image: "https://leaderpost.com/wp-content/uploads/sites/4/2026/10/20261016_hcy009.rg_305792727.jpg?w=1024",
    url: "https://leaderpost.com/news/reginas-11th-avenue-construction-declared-complete-and-under-budget-city/",
    comments: 4,
  },
  {
    source: "Leader-Post",
    time: "1 day ago",
    title: "Council ends talk of upping taxes on downtown parking lots",
    summary: "Stakeholders surveyed said the idea likely would not help boost downtown development as intended.",
    image: "https://leaderpost.com/wp-content/uploads/sites/4/2026/10/20261022_hcy005.rg_305893519.jpg?w=1024",
    url: "https://leaderpost.com/news/regina-city-hall/regina-city-council-ends-talk-of-upping-taxes-on-downtown-parking-lots/",
    comments: 7,
  },
  {
    source: "Leader-Post",
    time: "3 days ago",
    title: "Historic flags returned to legislature after long absence",
    summary: "The Royal Regina Rifles’ regimental colours have come home to the Saskatchewan Legislative Building.",
    image: "https://leaderpost.com/wp-content/uploads/sites/4/2026/10/20261021_hcy007.rg_305877331.jpg",
    url: "https://leaderpost.com/news/saskatchewan-news/homecoming-historic-military-flags-returned-to-saskatchewan-legislature-after-lengthy-absence/",
    comments: 2,
  },
];

const featured = businesses.filter((b) => b.package === "premium");

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-semibold mb-2">Regina Local</h1>
        <p className="text-stone-600">Discover local businesses, exclusive deals, and public updates in your city.</p>
      </section>

      <section className="bg-white border border-stone-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Invite Neighbors</h2>
        <p className="text-stone-600 text-sm mb-4">Share this local resource with people in your neighborhood.</p>
        <div className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="neighbor@email.com"
            className="flex-1 px-3 py-2 border border-stone-300 rounded text-sm"
          />
          <button className="bg-stone-900 text-white px-4 py-2 rounded text-sm font-medium">
            Invite
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Local News</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-3 space-y-6">
            {localFeed.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border-2 border-stone-800 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <div className="p-4 flex items-center gap-3">
                  <img src="/leaderpost-logo.svg" alt="" className="h-8 w-auto" />
                  <div>
                    <div className="font-semibold text-sm">{item.source}</div>
                    <div className="text-xs text-stone-500">Local publisher · {item.time}</div>
                  </div>
                </div>
                <div className="px-4 pb-3">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <div className="relative">
                  <img src={item.image} alt="" className="w-full h-64 object-cover" />
                  <span className="absolute bottom-3 left-3 bg-stone-900/80 text-white text-xs px-3 py-1.5 rounded">
                    Read article
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center gap-6 text-stone-500 text-sm border-t border-stone-100">
                  <span className="flex items-center gap-1">
                    <span className="text-lg">♡</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-lg">💬</span>
                    <span>{item.comments}</span>
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="text-lg">↗</span>
                  </span>
                </div>
                <div className="px-4 pb-4 text-sm text-stone-600">{item.summary}</div>
              </a>
            ))}
          </div>
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              <div className="text-xs uppercase tracking-wide font-medium px-4 pt-3 pb-2 border-b">Featured Businesses</div>
              {featured.slice(0, 1).map((b) => (
                <Link key={b.slug} href={`/business/${b.slug}`} className="block">
                  <img src="https://picsum.photos/seed/humane/400/240" alt="" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="text-xs uppercase text-stone-500">{b.name}</div>
                    <div className="font-semibold text-sm mt-1">{b.name} Services in Regina, SK</div>
                    <div className="flex items-center gap-2 mt-3 text-xs text-stone-500">
                      <span>{b.phone}</span>
                      <span>·</span>
                      <span>Regina, SK</span>
                    </div>
                    <div className="mt-3 inline-block border border-stone-300 text-xs px-3 py-1.5 rounded">Learn more</div>
                  </div>
                </Link>
              ))}
            </div>
            <a href="https://www.vw.ca" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/vw-ad.png" alt="Volkswagen advertisement" className="w-full rounded-xl border border-stone-200" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white border border-stone-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Local Newsletter</h2>
        <p className="text-stone-600 text-sm mb-4">Sign up for our local newsletter to get highlights and offers directly to your inbox.</p>
        <div className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-3 py-2 border border-stone-300 rounded text-sm"
          />
          <button className="bg-stone-900 text-white px-4 py-2 rounded text-sm font-medium">
            Sign up
          </button>
        </div>
      </section>
    </div>
  );
}
