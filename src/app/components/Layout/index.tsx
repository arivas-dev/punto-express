"use client";

import { Header } from "../Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-40 pt-10">
      <Header />
      {children}
    </div>
  );
}
