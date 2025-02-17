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

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <div>Welcome, {username || "Guest"}</div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}
