import Navbar from "@/components/shared/Navbar";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
