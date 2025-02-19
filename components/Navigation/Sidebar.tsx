// components/Navigation/Sidebar.tsx
"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { logout, UserRole } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  funtion?: any;
  select?: string;
}

export default function Sidebar({ funtion, select }: SidebarProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);

  const role = useSelector((state: RootState) => state.user.role);

  const Listmenu = {
    data: [
      {
        name: "Home",
        icon: "/image/hamberger.svg",
        link: "/home",
        allow: true
      },
      {
        name: "Overview",
        icon: "/image/Overview.svg",
        link: "/Overview",
        allow: true
      },
      {
        name: "Details",
        icon: "/image/Details.svg",
        link: "/Details",
        allow: true
      },

    ]
  }

  const [sliderbar, setSliderbar] = useState(true);

  const handleLogout = () => {
    funtion("Logout");
    dispatch(logout());
    router.replace("/login");
  };

  const handletoggleslidebar = () => {
    setSliderbar(!sliderbar);
  }

  return (
    <div className="h-full flex relative">
      <div className={`${sliderbar ? 'w-60' : 'w-0'} bg-darkBlue overflow-hidden h-[100vh] z-[3]
      duration-300 ease-in-out transition-all`}>
        <div className="w-full border-b-2 border-white py-5 flex items-center justify-center select-none">
          <img src="/image/Logo.svg" alt="logo" className="w-12 h-12" />
        </div>


        <div className="flex flex-col items-center justify-center pt-5 p-2 gap-5">
          {Listmenu.data.map((item, index) => {
            return (
              <Link href={item.link} onClick={() => funtion(item.name)}
                className={`flex flex-row items-center justify-start gap-4 flex-nowrap
                        py-2 px-8 rounded-[50px] text-white w-[90%]
                        duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
                        ${select === item.name ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
                        `}
                key={index}
              >
                <img src={item.icon} alt={item.name} className="cursor-pointer"></img>
                <label className="cursor-pointer text-nowrap">{item.name}</label>
              </Link>
            )
          })}
          <div onClick={handleLogout}
            className={`flex flex-row items-center justify-start gap-4 flex-nowrap
                        py-2 px-8 rounded-[50px] text-white w-[90%]
                        duration-300 ease-in-out transition-all transform  hover:scale-105  cursor-pointer
                        ${select === "Logout" ? 'bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]' : 'bg-transparent'}
                        `}
          >
            <img src="/image/Logout.svg" alt="Logout" className="cursor-pointer"></img>
            <label className="cursor-pointer text-nowrap">Log out</label>
          </div>
        </div>
      </div>

      <div className={`z-2 cursor-pointer absolute bottom-[100px] ${sliderbar ? 'right-[-14%]' : 'right-[-18px]'} duration-500 ease-in-out transition-all hover:scale-150`}>
        <img src="image/arowleft.svg" alt="arowleft" className={`w-[50px] h-[50px] cursor-pointer  duration-500 ease-in-out transition-all`} onClick={handletoggleslidebar}></img>
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
