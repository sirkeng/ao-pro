// app/(main)/layout.tsx
"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Sidebar from "@/components/Navigation/Sidebar";
import Topbar from "@/components/Navigation/Topbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  const role = useSelector((state: RootState) => state.user.role);
  const router = useRouter();

  const [selectmenu , setSelectmenu] = useState('home');

  const handleSelectMenu = (menu: string) => {
    setSelectmenu(menu);
  }

  // เช็ค role ก่อนเข้าแต่ละ path ได้ตามต้องการ
  useEffect(() => {
    // ตัวอย่าง: ถ้าไม่มี username => กลับไป login
    if (!role || role === "guest") {
      router.replace("/login");
    }
  }, [role, router]);

  return (
    <div className="flex h-screen">
      <Sidebar funtion={handleSelectMenu} select={selectmenu}/>
      <div className="flex-1 flex flex-col h-full">
        <Topbar />
        <main className="p-4 bg-[#EDF1F5] h-full overflow-auto">{children}</main>
      </div>
    </div>
  );
}
