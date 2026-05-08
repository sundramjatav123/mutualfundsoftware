"use client";

import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
    usePathname,
    useRouter,
} from "next/navigation";

import {
    useEffect,
    useState,
} from "react";

import {
    FiHome,
    FiUsers,
    FiBarChart2,
    FiFileText,
    FiBriefcase,
    FiLogOut,
} from "react-icons/fi";

import { MdKeyboardDoubleArrowLeft }
    from "react-icons/md";

import Button from "@/app/components/ui/Button";

import { showAlert }
    from "@/utils/swalConfig";

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
    {
        title: "Manage Lead",
        icon: FiBriefcase,
        link: "/admin/manage-lead",
    },
];

export default function Sidebar() {

    const {
        sidebarOpen,
        closeSidebar,
        isMobile,
    } = useSidebar();

    const pathname =
        usePathname();

    const router =
        useRouter();

    const { resolvedTheme } =
        useTheme();

    const [mounted,
        setMounted] =
        useState(false);

    const [logoutModal,
        setLogoutModal] =
        useState(false);

    useEffect(() => {

        setMounted(true);

    }, []);

    if (!mounted) return null;

    const handleLogout =
        async () => {

            try {

                const response =
                    await fetch(
                        "/api/logout",
                        {
                            method:
                                "POST",
                        }
                    );

                const data =
                    await response.json();

                if (data.success) {

                    setLogoutModal(
                        false
                    );

                    showAlert({
                        icon:
                            "success",

                        title:
                            "Success",

                        text:
                            "Logged out successfully",
                    });

                    router.push(
                        "/login"
                    );

                }

            } catch (error) {

                console.log(error);

                showAlert({
                    icon:
                        "error",

                    title:
                        "Error",

                    text:
                        "Logout failed",
                });

            }

        };

    return (
        <>
            {sidebarOpen &&
                isMobile && (
                    <div
                        className="fixed inset-0 z-40 bg-black/50"
                        onClick={
                            closeSidebar
                        }
                    ></div>
                )}

            <aside
                className={`bg-[var(--rv-bg)] top-0 left-0 z-50 h-screen border-r border-[var(--rv-border)] transform transition-all duration-300 ease-in-out ${
                    isMobile
                        ? `fixed min-w-72 ${
                              sidebarOpen
                                  ? "translate-x-0"
                                  : "-translate-x-full"
                          }`
                        : `relative ${
                              sidebarOpen
                                  ? "min-w-72"
                                  : "w-0 -ml-0"
                          }`
                } flex flex-col overflow-hidden`}
            >

                <div className="flex items-center gap-3 border-b border-[var(--rv-border)] p-1">

                    <div>
                        <img
                            src={
                                resolvedTheme ===
                                "dark"
                                    ? "/images/logo1.png"
                                    : "/images/logo.png"
                            }
                            alt="Logo"
                            className="h-16"
                        />
                    </div>

                    {isMobile && (
                        <button
                            onClick={
                                closeSidebar
                            }
                            className="w-8 h-8 flex items-center justify-center bg-[var(--rv-primary)] text-[var(--rv-white)] rounded-lg text-2xl"
                        >
                            <MdKeyboardDoubleArrowLeft />
                        </button>
                    )}

                </div>

                <div className="flex flex-col justify-between flex-1 p-2 py-4">

                    <div className="flex flex-col gap-2">

                        {sidebarLinks.map(
                            (
                                item,
                                i
                            ) => {

                                const Icon =
                                    item.icon;

                                const active =
                                    pathname ===
                                    item.link;

                                return (
                                    <Link
                                        key={
                                            i
                                        }
                                        href={
                                            item.link
                                        }
                                        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                                            active
                                                ? "bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)]"
                                                : "hover:bg-[var(--rv-primary-light)]"
                                        }`}
                                    >

                                        <Icon className="text-lg" />

                                        <span className="font-medium">
                                            {
                                                item.title
                                            }
                                        </span>

                                    </Link>
                                );
                            }
                        )}

                    </div>

                    <Button
                        onClick={() =>
                            setLogoutModal(
                                true
                            )
                        }
                        text="Logout"
                        Icon={
                            FiLogOut
                        }
                        className="bg-[var(--rv-red)] text-white"
                    />

                </div>

            </aside>

            {logoutModal && (

                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

                    <div className="w-full max-w-md rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-5">

                        <div className="flex flex-col gap-2">

                            <h3 className="text-2xl font-semibold">
                                Logout?
                            </h3>

                            <p className="opacity-70 text-sm">
                                Are you sure you want to logout from admin panel?
                            </p>

                        </div>

                        <div className="flex items-center justify-end gap-3">

                            <Button
                                onClick={() =>
                                    setLogoutModal(
                                        false
                                    )
                                }
                                text="Cancel"
                                variant="outline"
                            />

                            <Button
                                onClick={
                                    handleLogout
                                }
                                text="Yes Logout"
                                className="bg-[var(--rv-red)] text-white"
                            />

                        </div>

                    </div>

                </div>

            )}
        </>
    );
}