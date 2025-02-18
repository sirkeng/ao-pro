// components/Navigation/Sidebar.tsx
"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { UserRole } from "@/store/features/userSlice";

interface SidebarProps {
  funtion?: any;
  select?: string;
}

export default function Sidebar({ funtion, select }: SidebarProps) {

  const role = useSelector((state: RootState) => state.user.role);

  return (
    <div className="w-60 bg-darkBlue">
      <div className="w-full border-b-2 border-white py-5 flex items-center justify-center select-none">
        <img src="/image/Logo.svg" alt="logo" className="w-12 h-12" />
      </div>

      <div className="flex flex-col items-center justify-center pt-5 p-2 gap-5">
        <Link href="/home" onClick={() => funtion('home')}
          className={`flex flex-row items-center justify-start gap-2
        py-2 px-8 rounded-xl text-white w-[90%]
        duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
        ${select === 'home' ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
        `}
        >
          <img src="/image/hamberger.svg" alt="hamberger" className="cursor-pointer"></img>
          <label className="cursor-pointer">Home</label>
        </Link>
        <Link href="/Overview" onClick={() => funtion('Overview')}
          className={`flex flex-row items-center justify-start gap-2
            py-2 px-8 rounded-xl text-white w-[90%]
            duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
            ${select === 'Overview' ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
            `}>
          <img src="/image/Overview.svg" alt="Overview" className="cursor-pointer"></img>
          <label className="cursor-pointer">Overview</label>
        </Link>
        <Link href="/Details" onClick={() => funtion('Details')}
          className={`flex flex-row items-center justify-start gap-2
            py-2 px-8 rounded-xl text-white w-[90%]
            duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
            ${select === 'Details' ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
            `}>
          <img src="/image/Details.svg" alt="Details" className="cursor-pointer"></img>
          <label className="cursor-pointer">Details</label>
        </Link>
        <Link href="/Logout" onClick={() => funtion('Logout')}
          className={`flex flex-row items-center justify-start gap-2
            py-2 px-8 rounded-xl text-white w-[90%]
            duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
            ${select === 'Logout' ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
            `}>
          <img src="/image/Logout.svg" alt="Logout" className="cursor-pointer"></img>
          <label className="cursor-pointer">Log out</label>
        </Link>
      </div>


    </div>
  );
}

function allowAONavigator(role: UserRole): boolean {
  return ["ao", "assistant", "deputy", "manager", "senior"].includes(role);
}

function allowSegmentation(role: UserRole): boolean {
  return ["manager", "senior"].includes(role);
}
