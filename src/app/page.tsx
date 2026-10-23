import Link from "next/link";

const navCards = [
  { title: "Directory", desc: "Find local businesses and services", href: "/directory", icon: "🏢" },
  { title: "Offers & Coupons", desc: "Local deals and promotions", href: "/coupons", icon: "🏷️" },
  { title: "Legal Notices", desc: "Public notices and announcements", href: "/notices", icon: "📋" },
  { title: "City Hall", desc: "Municipal updates and services", href: "/notices", icon: "🏛️" },
  { title: "Community Calendar", desc: "Events and happenings", href: "/calendar", icon: "📅" },
  { title: "Classifieds", desc: "Buy, sell, and local listings", href: "/classifieds", icon: "📰" },
];

const localFeed = [
  {
    source: "Leader-Post",
    time: "2 hours ago",
    title: "Downtown revitalization project moves to next phase",
    summary: "City council approved additional funding for the 11th Avenue corridor upgrades.",
    image: "https://picsum.photos/seed/regina-downtown/800/450",
  },
  {
    source: "Leader-Post",
    time: "5 hours ago",
    title: "Roughriders prepare for playoff push",
    summary: "Local coverage of the team's final regular season preparations.",
    image: "https://picsum.photos/seed/regina-riders/800/450",
  },
  {
    source: "Community",
    time: "1 day ago",
    title: "Neighbors organizing fall cleanup on Wascana Parkway",
    summary: "Residents are coordinating a weekend cleanup event for the green space.",
    image: "https://picsum.photos/seed/regina-community/800/450",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-semibold mb-2">Regina Local</h1>
        <p className="text-stone-600 mb-8">Discover local businesses, exclusive deals, and public updates in your city.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {navCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white border border-stone-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-sm transition"
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <div className="font-semibold">{card.title}</div>
              <div className="text-sm text-stone-500 mt-1">{card.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Local Feed</h2>
          <span className="text-xs text-stone-400">Inspired by neighborhood networks</span>
        </div>
        <div className="space-y-6">
          {localFeed.map((item, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-lg overflow-hidden">
              <img src={item.image} alt="" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <span className="font-medium text-stone-700">{item.source}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.summary}</p>
                <button className="mt-3 text-sm text-amber-700 font-medium">Read article</button>
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
}
