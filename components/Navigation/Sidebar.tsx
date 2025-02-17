// components/Navigation/Sidebar.tsx
"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { UserRole } from "@/store/features/userSlice";

export default function Sidebar() {
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <div className="w-60 bg-gray-200 p-4">
      <div className="mb-4 font-bold">Sidebar</div>

      {/* Always show Home */}
      <Link href="/home">Home</Link>
      <hr className="my-2" />

      {/* AO Pro Navigator */}
      {allowAONavigator(role) && (
        <div className="mb-2">
          <Link href="/ao-pro-navigator">AO Pro Navigator</Link>
        </div>
      )}

      {/* Segmentation */}
      {allowSegmentation(role) && (
        <div className="mb-2">
          <Link href="/segmentation-allocation">Segmentation</Link>
        </div>
      )}
    </div>
  );
}

function allowAONavigator(role: UserRole): boolean {
  return ["ao", "assistant", "deputy", "manager", "senior"].includes(role);
}

function allowSegmentation(role: UserRole): boolean {
  return ["manager", "senior"].includes(role);
}
