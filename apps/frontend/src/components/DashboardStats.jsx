import React, { useState, useEffect } from "react";
import { Package, Clock, CheckCircle, TrendingUp, Plus } from "lucide-react";
import DashboardStatCard from './DashboardStatsCard';
import DashboardNavbar from "./DashboardNavbar";

export default function DashboardStats() {
    const [shipments] = useState([
        { id: "SH001", name: "Electronics Batch A", status: "NEW" },
        { id: "SH002", name: "Medical Supplies", status: "DELIVERED" },
        { id: "SH003", name: "Auto Parts Shipment", status: "IN_TRANSIT" },
        { id: "SH004", name: "Fashion Items", status: "DELIVERED" },
        { id: "SH005", name: "Home Appliances", status: "NEW" },
        { id: "SH006", name: "Sports Equipment", status: "IN_TRANSIT" },
    ]);

    const stats = [
        { label: "NEW", value: shipments.filter(s => s.status === "NEW").length, icon: Package },
        { label: "IN_TRANSIT", value: shipments.filter(s => s.status === "IN_TRANSIT").length, icon: Clock },
        { label: "DELIVERED", value: shipments.filter(s => s.status === "DELIVERED").length, icon: CheckCircle },
        { label: "CANCELLED", value: shipments.filter(s => s.status === "CANCELLED").length, icon: TrendingUp },
    ];

    const videos = [
        "/page1.mp4",
        "/page2.mp4",
        "/page3.mp4",
        "/page4.mp4",
        "/page5.mp4",
    ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [username] = useState("Alex Chen");
    const [activeTab, setActiveTab] = useState("Dashboard");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex(prev => (prev + 1) % videos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleCreateShipment = () => {
        alert("Create New Shipment clicked!");

    }

    return (
        <div className="min-h-screen text-gray-800 overflow-hidden relative bg-[#FFFFFF]">
            <DashboardNavbar
                username={username}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="flex mb-20 w-full mt-25 h-[85vh]">
                {/* Left: Animated Video */}
                <div className="w-1/2 h-full relative overflow-hidden">
                    {videos.map((video, idx) => (
                        <video
                            key={idx}
                            src={video}
                            autoPlay
                            loop
                            muted
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentVideoIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        />
                    ))}
                    <div className="absolute inset-0"></div>
                </div>

                {/* Right: Stats */}
                <div className="w-1/2 h-full p-12 flex flex-col justify-start">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                            CatchUp Today's Stats
                        </h1>
                    </div>

                    {/* Vertical Stats Cards */}
                    <div className="flex flex-col gap-6 mb-6">
                        {stats.map((stat, index) => (
                            <DashboardStatCard key={stat.label} stat={stat} index={index} />
                        ))}
                    </div>

                    {/* Create Shipment Button */}
                    <button
                        onClick={handleCreateShipment}
                        className="mt-4 flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md min-w-[150px] 
               transition-all duration-300 transform hover:bg-orange-500 hover:scale-105 cursor-pointer hover:shadow-lg"
                    >
                        <Plus className="w-5 h-5" /> Create New Shipment
                    </button>

                </div>
            </div>
        </div>
    );
}
