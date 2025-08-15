import React, { useState } from "react";
import DashboardNavbar from './DashboardNavbar';
import DashboardStats from './DashboardStats';
import MyShipments from './MyShipments';
import AllShipments from './AllShipments';

export default function Dashboard() {
    const [username] = useState("Alex Chen");
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="min-h-screen text-gray-800 overflow-hidden relative bg-[#FFFFFF]">
            <DashboardNavbar username={username} activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="pt-32 px-4 sm:px-6 bg-[#FFFFFF] lg:px-8 pb-8">
                {activeTab === "Dashboard" && <DashboardStats />}
                {activeTab === "MyShipments" && <MyShipments />}
                {activeTab === "AllShipments" && <AllShipments />}
            </div>
        </div>
    );
}
