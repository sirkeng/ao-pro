// app/(main)/layout.tsx
"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Sidebar from "@/components/Navigation/Sidebar";
import Topbar from "@/components/Navigation/Topbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  const role = useSelector((state: RootState) => state.user.role);
  const router = useRouter();

  // เช็ค role ก่อนเข้าแต่ละ path ได้ตามต้องการ
  useEffect(() => {
    // ตัวอย่าง: ถ้าไม่มี username => กลับไป login
    if (!role || role === "guest") {
      router.replace("/login");
    }
  }, [role, router]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
