"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function HomePage() {
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">
        Hi, Welcome to AO Pro Navigator &amp; Segmentation For Allocation
      </h1>
      <p className="text-gray-600 mb-4">
        Please select the system you want to use.
      </p>

      {/* Container สำหรับ Card 2 ใบ */}
      <div className="flex gap-8">
        {/* Card สำหรับ AO Pro Navigator */}
        <div className="w-64 h-40 bg-gray-800 text-white flex flex-col items-center justify-center rounded-md shadow-md">
          <div className="text-lg font-semibold">AO Pro Navigator</div>
          <div className="mt-2 text-sm">
            Role allowed: ao, assistant, deputy, manager, senior
          </div>
          <Link href="/ao-pro-navigator">
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
              Go
            </button>
          </Link>
        </div>

        {/* Card สำหรับ Segmentation for Allocation */}
        <div className="w-64 h-40 bg-gray-800 text-white flex flex-col items-center justify-center rounded-md shadow-md">
          <div className="text-lg font-semibold">
            Segmentation for Allocation
          </div>
          <div className="mt-2 text-sm">Role allowed: manager, senior</div>
          <Link href="/segmentation-allocation">
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
              Go
            </button>
          </Link>
        </div>
      </div>

      {/* แสดง role ปัจจุบัน */}
      <div className="mt-6 text-gray-700">
        Your current role is: <b>{role}</b>
      </div>
    </div>
  );
}
