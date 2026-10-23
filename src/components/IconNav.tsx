import Link from "next/link";

const items = [
  { title: "Directory", href: "/directory", icon: "🏢" },
  { title: "Offers", href: "/coupons", icon: "🏷️" },
  { title: "Notices", href: "/notices", icon: "📋" },
  { title: "City Hall", href: "/notices", icon: "🏛️" },
  { title: "Calendar", href: "/calendar", icon: "📅" },
  { title: "Classifieds", href: "/classifieds", icon: "📰" },
  { title: "Jobs", href: "/jobs", icon: "💼" },
];

export default function IconNav() {
  return (
    <div className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-7 gap-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex flex-col items-center justify-center gap-2 py-3 rounded-lg hover:bg-stone-50 transition text-center"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-medium text-stone-700">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
