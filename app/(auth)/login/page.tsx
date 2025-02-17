"use client";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { login } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState<
    "ao" | "assistant" | "deputy" | "manager" | "senior" | "guest"
  >("guest");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // dispatch login
    dispatch(login({ username, role }));
    // redirect to home page in (main)
    router.replace("/home"); // หรือ '/(main)' ถ้าต้องการ
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded shadow">
      {/* ถ้ามีรูป หรือ UI Login */}
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          className="border p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select
          className="border p-2"
          value={role}
          onChange={(e) => setRole(e.target.value as typeof role)}
        >
          <option value="guest">guest</option>
          <option value="ao">ao</option>
          <option value="assistant">assistant</option>
          <option value="deputy">deputy</option>
          <option value="manager">manager</option>
          <option value="senior">senior</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
