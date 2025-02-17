// app/(auth)/layout.tsx
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      {children}
    </section>
  );
}
