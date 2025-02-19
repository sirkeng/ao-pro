"use client";
import { ReactNode, useEffect } from "react";
import Sidebar from "@/components/Navigation/Sidebar";
import Topbar from "@/components/Navigation/Topbar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter, usePathname } from "next/navigation";
import { UserRole } from "@/store/features/userSlice";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const role = useSelector((state: RootState) => state.user.role);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // ตรวจสอบ path + role
    if (
      pathname.startsWith("/segmentation-allocation") &&
      !allowSegmentation(role)
    ) {
      router.replace("/403");
    }
    if (pathname.startsWith("/ao-pro-navigator") && !allowAONavigator(role)) {
      router.replace("/403");
    }
  }, [role, pathname, router]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 ">{children}</main>
      </div>
    </div>
  );
}

function allowSegmentation(role: UserRole): boolean {
  // manager, senior allowed
  return role === "manager" || role === "senior";
}

function allowAONavigator(role: UserRole): boolean {
  // ao, assistant, deputy, manager, senior
  return ["ao", "assistant", "deputy", "manager", "senior"].includes(role);
}
