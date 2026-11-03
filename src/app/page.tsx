"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div className="flex flex-col items-center gap-4">
        {/* Modern Glowing Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Pulse Loading Text */}
        <div className="flex items-center gap-1 text-sm font-medium text-slate-400 animate-pulse">
          <span>Loading</span>
          <span className="tracking-widest">...</span>
        </div>
      </div>
    </div>
  );
}