import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DashboardNavbar({ username }) {
    const navigate = useNavigate();
    const initial = username?.[0]?.toUpperCase() || "?";

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.info("Logged out!");
        navigate("/");
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/10">
            <div className="flex items-center gap-2">
                <span className="text-orange-500 text-xl font-bold">Shipsy</span>
            </div>
            <div className="flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold cursor-pointer relative group"
                    title={username}
                >
                    {initial}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {username}
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
