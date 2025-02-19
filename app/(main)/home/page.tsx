"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function HomePage() {
  const role = useSelector((state: RootState) => state.user.role);

  const listlink = {
    data: [
      {
        name: "AO Pro",
        name2: "Navigator",
        link: "/ao-pro-navigator",
        allow: ["ao", "assistant", "deputy", "manager", "senior"],
      },
      {
        name: "Segmentation ",
        name2: "for Allocation",
        link: "/segmentation-allocation",
        allow: ["manager", "senior"],
      },
    ],
  }

  return (
    <div className="p-4 " style={{ height: "calc(100vh - 4rem)" }}>
      <h1 className="text-2xl font-bold my-4 text-black">
        Hi, Welcome to AO Pro Navigator &amp; Segmentation For Allocation
      </h1>
      <p className="text-gray-600 mb-4 text-lg">
        Please select the system you want to use.
      </p>

      <div className="flex gap-8 w-full h-[auto] flex-wrap justify-center items-center mt-10">
        {listlink.data.map((item, index) => {
          return (
            <>
              <Link href={item?.link} className="flex flex-col bg-[#0F0F2F] rounded-xl shadow w-[100%] h-[100%] items-center justify-center  text-center max-w-[500px] min-w-[150px] max-h-[1000px] min-h-[350px] 
                hover:scale-105 duration-300 ease-in-out transition-all transform select-none cursor-pointer
                hover:drop-shadow-lg
              ">
                <img src="image/Logo.svg" alt="Logo" className="w-[70px] cursor-pointer"></img>
                <label className="text-white text-3xl font-semibold mt-4 cursor-pointer">{item?.name}<label className="text-yellow-400 cursor-pointer">{item?.name2}</label></label>
              </Link>
            </>
          )
        })}
      </div>

      {/* แสดง role ปัจจุบัน
      <div className="mt-6 text-gray-700">
        Your current role is: <b>{role}</b>
      </div> */}
    </div>
  );
}
