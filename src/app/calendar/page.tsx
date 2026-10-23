import { events } from "@/lib/data";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Community Calendar</h1>
          <p className="text-stone-600 mt-1">Local events and happenings in Regina.</p>
        </div>
        <Link
          href="/packages"
          className="bg-stone-900 text-white text-sm px-4 py-2 rounded font-medium hover:bg-stone-800"
        >
          Submit your event
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5 flex gap-5">
            <div className="flex-shrink-0 w-16 h-16 bg-stone-900 text-white rounded-lg flex flex-col items-center justify-center">
              <div className="text-xs uppercase tracking-wide">{e.month}</div>
              <div className="text-xl font-bold leading-none">{e.day}</div>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{e.title}</h2>
              <div className="text-sm text-stone-500 mt-1">
                {e.date} · {e.time}
              </div>
              <div className="text-sm text-stone-500">{e.location}</div>
              <p className="text-sm text-stone-600 mt-2">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
