// app/(main)/page.tsx
"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function HomePage() {
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <div>
      <h1 className="text-xl font-bold text-black">
        Hi, Welcome to AO Pro Navigator & Segmentation For Allocation
      </h1>
      <p>Please select the system you want to use.</p>

      <div className="flex gap-8 mt-4">
        {/* การ์ดสำหรับ AO Pro Navigator */}
        <div className="bg-white p-4 shadow w-60 text-center">
          <h2 className="text-lg font-semibold">AO Pro Navigator</h2>
          <p>Role allowed: ao, assistant, deputy, manager, senior</p>
          <Link href="/ao-pro-navigator">
            <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">
              Go
            </button>
          </Link>
        </div>

        {/* การ์ดสำหรับ Segmentation */}
        <div className="bg-white p-4 shadow w-60 text-center">
          <h2 className="text-lg font-semibold">Segmentation for Allocation</h2>
          <p>Role allowed: manager, senior</p>
          <Link href="/segmentation-allocation">
            <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">
              Go
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        Your current role is: <b>{role}</b>
      </div>
    </div>
  );
}
