"use client";

import Button from "@/app/components/ui/Button";
import { motion } from "framer-motion";

import {
    FiUsers,
    FiTrendingUp,
    FiDollarSign,
    FiActivity,
    FiArrowUpRight,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";

const stats = [
    {
        title: "Total Clients",
        value: "1,245",
        growth: "+12%",
        icon: <FiUsers />,
    },
    {
        title: "AUM Managed",
        value: "₹42Cr+",
        growth: "+18%",
        icon: <FiDollarSign />,
    },
    {
        title: "Monthly SIPs",
        value: "₹8.5L",
        growth: "+9%",
        icon: <FiTrendingUp />,
    },
    {
        title: "Growth Rate",
        value: "+18%",
        growth: "+4%",
        icon: <FiActivity />,
    },
];

const activities = [
    {
        title: "New client onboarded",
        time: "2 min ago",
    },
    {
        title: "Portfolio report generated",
        time: "10 min ago",
    },
    {
        title: "SIP transaction completed",
        time: "25 min ago",
    },
    {
        title: "KYC verification approved",
        time: "1 hour ago",
    },
];

export default function AdminDashboard() {

    return (
        <section className="flex flex-col gap-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] p-6 md:p-8 text-[var(--rv-white)]"
            >
                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="w-fit px-3 py-1 rounded-full border border-[var(--rv-white-light)] bg-[var(--rv-white-light)] text-sm">
                            Wealth Management Dashboard
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Welcome Back,
                            <br />
                            Admin 👋
                        </h2>

                        <p className="opacity-80 max-w-2xl">
                            Monitor business growth, track portfolios,
                            manage clients, and scale your MFD operations
                            from one intelligent dashboard.
                        </p>

                    </div>
                    <div
                        className="grid grid-cols-2 gap-4  w-full md:w-[350px]"
                    >
                        <div className="p-4 rounded-xl border border-[var(--rv-white-light)] bg-[var(--rv-white-light)] backdrop-blur-md">
                            <p className="text-sm opacity-70">
                                Active Clients
                            </p>

                            <h4 className="text-2xl font-bold mt-1">
                                1,245
                            </h4>
                        </div>

                        <div className="p-4 rounded-xl border border-[var(--rv-white-light)] bg-[var(--rv-white-light)] backdrop-blur-md">
                            <p className="text-sm opacity-70">
                                Monthly Revenue
                            </p>

                            <h4 className="text-2xl font-bold mt-1">
                                ₹3.2L
                            </h4>
                        </div>

                        <div className="p-4 rounded-xl border border-[var(--rv-white-light)] bg-[var(--rv-white-light)] backdrop-blur-md">
                            <p className="text-sm opacity-70">
                                SIP Running
                            </p>

                            <h4 className="text-2xl font-bold mt-1">
                                845
                            </h4>
                        </div>

                        <div className="p-4 rounded-xl border border-[var(--rv-white-light)] bg-[var(--rv-white-light)] backdrop-blur-md">
                            <p className="text-sm opacity-70">
                                Success Rate
                            </p>

                            <h4 className="text-2xl font-bold mt-1">
                                98%
                            </h4>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden  p-5 rounded-xl   border border-[var(--rv-border)]   bg-[var(--rv-card)] transition-all duration-300"
                    >
                        <div
                            className="absolute top-0 right-0 w-[120px] h-[120px] bg-[var(--rv-primary)] opacity-30 blur-[70px]"
                        ></div>
                        <div className="relative z-10 flex items-start justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="opacity-70 text-sm">
                                    {item.title}
                                </p>
                                <h5 className="font-bold">
                                    {item.value}
                                </h5>
                                <div className="flex items-center gap-1 text-[var(--rv-green)] text-sm font-medium">
                                    <FiArrowUpRight />
                                    {item.growth} this month
                                </div>
                            </div>
                            <div
                                className="w-14 h-14 rounded-2xl  bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]  flex items-center justify-center text-[var(--rv-white)] text-2xl shadow-lg"
                            >
                                {item.icon}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="xl:col-span-2 p-6 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)]"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h6 className="font-semibold">
                                Recent Activity
                            </h6>
                            <p className="text-sm opacity-70">
                                Latest actions across your platform
                            </p>
                        </div>

                        <button
                            className="px-4 py-2 rounded-xl bg-[var(--rv-primary-light)]  text-[var(--rv-primary)] text-sm font-medium"
                        >
                            View All
                        </button>

                    </div>

                    <div className="flex flex-col gap-4">

                        {activities.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between  p-4 rounded-xl border border-[var(--rv-border)] hover:bg-[var(--rv-primary-light)] transition"
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center  text-[var(--rv-green)] text-xl"
                                    >
                                        <FiCheckCircle />
                                    </div>

                                    <div>

                                        <h6 className="font-medium">
                                            {item.title}
                                        </h6>

                                        <p className="text-sm opacity-60">
                                            Successful update
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2 text-sm opacity-60">

                                    <FiClock />

                                    {item.time}

                                </div>

                            </div>
                        ))}

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] flex flex-col gap-6"
                >

                    <div>
                        <h6 className="font-semibold">
                            Business Insights
                        </h6>
                        <p className="text-sm opacity-70">
                            Performance overview
                        </p>
                    </div>
                    {[
                        {
                            label: "Client Retention",
                            value: "92%",
                            width: "92%",
                        },
                        {
                            label: "Monthly Target",
                            value: "76%",
                            width: "76%",
                        },
                        {
                            label: "Automation Usage",
                            value: "88%",
                            width: "88%",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex justify-between text-sm">
                                <span>
                                    {item.label}
                                </span>
                                <span className="font-medium">
                                    {item.value}
                                </span>
                            </div>
                            <div className="w-full h-3 rounded-full bg-[var(--rv-primary-light)] overflow-hidden">
                                <div
                                    style={{ width: item.width }}
                                    className="h-full rounded-full  bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]"
                                ></div>
                            </div>
                        </div>
                    ))}
                    <div
                        className="mt-auto p-5 rounded-xl  bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)] flex flex-col gap-3"
                    >
                        <h5 className="font-semibold">
                            Scale Faster 🚀
                        </h5>

                        <p className="text-sm opacity-80">
                            Enable automation and improve your
                            client engagement workflow.
                        </p>
                        <div>
                            <Button text='Explore Features' variant="secondary" />
                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}