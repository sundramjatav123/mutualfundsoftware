"use client";

import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    FiHome,
    FiUsers,
    FiBarChart2,
    FiFileText,
    FiSettings,
    FiBriefcase,
} from "react-icons/fi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const sidebarLinks = [
    {
        title: "Dashboard",
        icon: FiHome,
        link: "/admin",
    },
    {
        title: "Site Settings",
        icon: FiBarChart2,
        link: "/admin/site-settings",
    },
    {
        title: "Manage Blogs",
        icon: FiUsers,
        link: "/admin/manage-blogs",
    },
    {
        title: "Manage Faqs",
        icon: FiFileText,
        link: "/admin/manage-faqs",
    },
    // {
    //     title: "Services",
    //     icon: FiBriefcase,
    //     link: "/admin/services",
    // },
    // {
    //     title: "Settings",
    //     icon: FiSettings,
    //     link: "/admin/settings",
    // },
];

export default function Sidebar() {
    const { sidebarOpen, closeSidebar, isMobile } = useSidebar();
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            {sidebarOpen && isMobile && (
                <div
                    className="fixed inset-0 z-40 bg-black/50"
                    onClick={closeSidebar}
                ></div>
            )}
            <aside
                className={` bg-[var(--rv-bg)] top-0 left-0 z-50 h-screen border-r border-[var(--rv-border)] transform transition-all duration-300 ease-in-out ${isMobile ? `fixed w-72 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}` : `relative ${sidebarOpen ? "w-72" : "w-0 -ml-0"}`} flex flex-col overflow-hidden`}>
                <div className="flex items-center gap-3 border-b border-[var(--rv-border)] p-1">
                    <div>
                        <img
                            src={resolvedTheme === "dark" ? "/images/logo1.png" : "/images/logo.png"}
                            alt="Logo"
                            className="h-16"
                        />
                    </div>
                    {isMobile && (
                        <button
                            onClick={closeSidebar}
                            className="w-8 h-8 flex items-center justify-center bg-[var(--rv-primary)] text-[var(--rv-white)] rounded-lg text-2xl cursor-pointer hover:bg-[var(--rv-primary)] transition-colors"
                        >
                            <MdKeyboardDoubleArrowLeft />
                        </button>
                    )}
                </div>

                <div className="flex flex-col gap-2 p-2 py-4">
                    {sidebarLinks.map((item, i) => {
                        const Icon = item.icon;
                        const active = pathname === item.link;

                        return (
                            <Link
                                key={i}
                                href={item.link}
                                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${active ? "bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)]" : "hover:bg-[var(--rv-primary-light)]"}`}
                            >
                                <Icon className="text-lg" />

                                <span className="font-medium">
                                    {item.title}
                                </span>

                            </Link>
                        );
                    })}
                </div>
            </aside>
        </>
    );
}