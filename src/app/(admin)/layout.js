// src/app/(admin)/layout.jsx

"use client";

import { ThemeProvider } from "next-themes";

import Sidebar from "@/app/components/admin/Sidebar";
import Topbar from "@/app/components/admin/Topbar";

import {
  SidebarProvider,
  useSidebar,
} from "@/context/SidebarContext";

function AdminWrapper({ children }) {

  const { sidebarOpen, isMobile } = useSidebar();

  return (
    <section className="flex h-screen bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">

      <Sidebar />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out  ${isMobile ? "w-full" : sidebarOpen ? "ml-0" : "ml-0"} `}
      >

        <Topbar />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">

          {children}

        </main>

      </div>

    </section>
  );
}

export default function AdminLayout({ children }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >

      <SidebarProvider>

        <AdminWrapper>

          {children}

        </AdminWrapper>

      </SidebarProvider>

    </ThemeProvider>
  );
}