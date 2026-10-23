import Link from "next/link";
import { businesses } from "@/lib/data";

const localFeed = [
  {
    source: "Leader-Post",
    time: "2 days ago",
    title: "Downtown revitalization project moves to next phase",
    summary: "City council approved additional funding for the 11th Avenue corridor upgrades.",
    image: "https://picsum.photos/seed/regina-downtown/800/450",
    comments: 3,
  },
  {
    source: "Leader-Post",
    time: "2 days ago",
    title: "Roughriders prepare for playoff push",
    summary: "Local coverage of the team's final regular season preparations.",
    image: "https://picsum.photos/seed/regina-riders/800/450",
    comments: 7,
  },
  {
    source: "Leader-Post",
    time: "3 days ago",
    title: "Neighbors organizing fall cleanup on Wascana Parkway",
    summary: "Residents are coordinating a weekend cleanup event for the green space.",
    image: "https://picsum.photos/seed/regina-community/800/450",
    comments: 1,
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
              <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
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
                  <button className="absolute bottom-3 left-3 bg-stone-900/80 text-white text-xs px-3 py-1.5 rounded">
                    Read article
                  </button>
                </div>
                <div className="px-4 py-3 flex items-center gap-6 text-stone-500 text-sm border-t border-stone-100">
                  <button className="flex items-center gap-1 hover:text-stone-700">
                    <span className="text-lg">♡</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-stone-700">
                    <span className="text-lg">💬</span>
                    <span>{item.comments}</span>
                  </button>
                  <button className="ml-auto flex items-center gap-1 hover:text-stone-700">
                    <span className="text-lg">↗</span>
                  </button>
                </div>
                <div className="px-4 pb-4 text-sm text-stone-600">{item.summary}</div>
              </div>
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
            <div className="bg-stone-100 border border-stone-200 rounded-xl p-4 text-center min-h-[200px] flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wide text-stone-500 mb-3">Advertisement</div>
              <div className="bg-white border border-stone-200 rounded p-4">
                <div className="font-semibold text-sm mb-1">Feature Your Business</div>
                <p className="text-xs text-stone-600 mb-3">Reach Regina customers on Leader-Post Local</p>
                <Link href="/packages" className="text-xs bg-stone-900 text-white px-3 py-1.5 rounded inline-block">
                  Show your business here
                </Link>
              </div>
            </div>
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
