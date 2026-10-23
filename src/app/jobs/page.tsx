import { jobs } from "@/lib/data";
import Link from "next/link";

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Find Your Next Job With The Regina Leader-Post</h1>
      <p className="text-stone-600 mb-8">Local opportunities from employers across Regina and Saskatchewan.</p>

      <div className="mb-6">
        <input
          type="search"
          placeholder="Search jobs..."
          className="w-full max-w-xl px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="text-xs text-stone-400 mb-1">{job.source}</div>
            <h2 className="font-semibold text-lg">{job.title}</h2>
            <div className="text-stone-600">{job.company}</div>
            <div className="text-sm text-stone-500 mt-1">{job.location} • {job.type}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/packages" className="text-sm text-amber-700 hover:underline">
          Advertise your job opening
        </Link>
      </div>
    </div>
  );
}
