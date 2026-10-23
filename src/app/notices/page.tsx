import { notices } from "@/lib/data";

export default function NoticesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Local Legal Notices</h1>
      <div className="space-y-4">
        {notices.map((n, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="text-sm text-stone-500">{n.date}</div>
            <h2 className="font-semibold text-lg mt-1">{n.title}</h2>
            <p className="text-stone-600 mt-2">{n.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
