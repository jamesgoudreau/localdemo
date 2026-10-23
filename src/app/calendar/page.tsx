import { events } from "@/lib/data";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Community Calendar</h1>
      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="font-semibold">{e.title}</div>
            <div className="text-sm text-stone-500">{e.date} • {e.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
