import Link from "next/link";

const items = [
  {
    title: "Directory",
    href: "/directory",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
  },
  {
    title: "Offers",
    href: "/coupons",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6" />
        <path d="M4 12a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0 0-4" />
        <path d="M12 6v12" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Notices",
    href: "/notices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
  },
  {
    title: "City Hall",
    href: "/notices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Classifieds",
    href: "/classifieds",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
];

export default function IconNav() {
  return (
    <div className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-7 gap-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex flex-col items-center justify-center gap-3 py-4 rounded-lg bg-stone-100 hover:bg-stone-200 transition text-center text-stone-900"
            >
              <div className="text-stone-900">{item.icon}</div>
              <span className="text-xs font-semibold tracking-wide">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
