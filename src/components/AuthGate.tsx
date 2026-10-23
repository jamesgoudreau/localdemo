"use client";

import { useState, useEffect } from "react";

const PASSWORD = "leaderpost";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("localdemo-auth") === "true") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("localdemo-auth", "true");
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-stone-50 px-4">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-stone-900 mb-2">Leader-Post Local</h1>
          <p className="text-stone-600 mb-6">This is a private demo. Enter the password to continue.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-stone-900 text-white py-2 rounded font-medium hover:bg-stone-800 active:scale-[0.98] transition"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
