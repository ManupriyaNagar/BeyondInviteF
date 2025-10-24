"use client";
import { useState } from "react";
import {
    BarChart3,
    Users,
    ShoppingBag,
    Mail,
    TrendingUp,
    Settings,
    Bell,
    Search,
    Menu,
    X,
    Home,
    LogOut
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const sidebarItems = [
        { id: "overview", label: "Overview", icon: BarChart3, href: "/dashboard" },
        { id: "invitations", label: "Invitations", icon: Mail, href: "/dashboard/invitations" },
        { id: "orders", label: "Orders", icon: ShoppingBag, href: "/dashboard/orders" },
        { id: "customers", label: "Customers", icon: Users, href: "/dashboard/customers" },
        // { id: "analytics", label: "Analytics", icon: TrendingUp, href: "/dashboard/analytics" },
        // { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
        //   { id: "templates", label: "Templates", icon: Settings, href: "/dashboard/templates" }
    ];

    const isActive = (href) => {
        if (href === "/dashboard") {
            return pathname === "/dashboard";
        }
        return pathname.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <nav className="bg-white border-b px-6 py-4 sticky top-0 z-40">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        <Link href="/" className="flex items-center gap-4">
                            <Image src="/logo.png" alt="bInvite" width={120} height={40} />
                            <span className="text-gray-300 hidden sm:block">|</span>
                            <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">Dashboard</h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D] w-64"
                            />
                        </div>
                        <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#37514D] rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">M</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-medium text-gray-900">Manupriya Nagar</p>
                                <p className="text-xs text-gray-600">manupriyanagar2@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
                    <div className="flex flex-col h-full">
                        <nav className="flex-1 p-4 pt-6">
                            <ul className="space-y-2">
                                {sidebarItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${isActive(item.href)
                                                ? "bg-[#37514D] text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-4 border-t">
                            <Link
                                href="/"
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                                <Home className="w-5 h-5" />
                                Back to Site
                            </Link>
                            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mt-2">
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}