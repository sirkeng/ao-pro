// components/Navigation/Topbar.tsx
"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { logout } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);


  return (
    <div className="bg-white shadow p-2 flex justify-end ">
      <div className=" min-w-48
        flex flex-row items-center justify-start gap-4 flex-nowrap
        py-2 px-7 rounded-[50px] text-white
        duration-300 ease-in-out transition-all transform select-none
        bg-gradient-to-r from-[#49D8FF] to-[#5C8DBC]
      ">
        <div className="flex flex-row items-center justify-start gap-2 flex-nowrap rounded-[50px] border-2 boder-white 
        w-[45px] h-[45px]">
          {/* <img src="/image/Profile.svg" alt="profile" className="w-6 h-6" /> */}
        </div>
        <div className="flex flex-col items-starts justify-start flex-nowrap">
          <label className="text-sm">Thammasorn</label>
          <label className="text-sm opacity-50">เจ้าหน้าที่พัฒนาสินทรัพย์</label>
        </div>
      </div>
    </div>
  );
}
