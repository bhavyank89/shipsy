import React, { useState } from "react";
import { Plus, Package, TrendingUp, Clock, CheckCircle, Settings, Bell, Search, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const DashboardNavbar = ({ username }) => (
    <motion.div
        className="fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-8 pt-6 z-50"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <motion.nav className="flex items-center justify-between px-8 py-4 rounded-3xl glassmorphism shadow-2xl border border-white/10">
            {/* Left: Logo + Brand Name */}
            <motion.div className="flex items-center gap-4">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="32" fill="none" className="drop-shadow-lg">
                        <path d="M 39.106 13.451 L 38.488 13.451 L 34.556 6.403 C 34.407 6.135 34.124 5.978 33.793 5.978 L 29.169 5.978 L 30.085 1.063 C 30.195 0.476 29.812 0 29.231 0 L 4.779 0.011 C 4.151 0.011 3.641 0.525 3.641 1.159 C 3.641 1.794 4.151 2.308 4.779 2.308 L 18.237 2.308 C 18.772 2.401 19.18 2.871 19.18 3.439 C 19.18 4.04 18.722 4.533 18.139 4.582 L 1.138 4.582 C 0.51 4.583 0 5.097 0 5.731 C 0 6.366 0.51 6.88 1.138 6.88 L 18.187 6.88 C 18.747 6.952 19.18 7.433 19.18 8.018 C 19.18 8.606 18.743 9.089 18.18 9.158 L 2.807 9.158 C 2.178 9.158 1.669 9.672 1.669 10.307 C 1.669 10.941 2.178 11.455 2.807 11.455 L 6.37 11.455 L 4.495 21.519 C 4.385 22.106 4.768 22.582 5.35 22.582 L 7.028 22.582 C 6.704 25.012 8.341 26.949 10.779 26.949 C 13.218 26.949 15.577 25.012 16.158 22.582 L 25.021 22.582 L 27.527 22.582 C 27.202 25.012 28.839 26.949 31.278 26.949 C 33.716 26.949 36.076 25.012 36.657 22.582 L 37.404 22.582 L 38.336 22.582 C 38.917 22.582 39.478 22.106 39.587 21.519 L 39.926 19.7 C 40.028 19.155 39.704 18.705 39.191 18.645 L 39.961 14.514 C 40.07 13.927 39.687 13.451 39.106 13.451 Z M 14.105 22.334 C 13.85 23.706 12.535 24.823 11.176 24.823 C 9.816 24.823 8.918 23.706 9.174 22.334 C 9.43 20.961 10.744 19.845 12.104 19.845 C 13.463 19.845 14.361 20.961 14.105 22.334 Z M 34.604 22.334 C 34.348 23.706 33.033 24.823 31.674 24.823 C 30.314 24.823 29.416 23.706 29.672 22.334 C 29.928 20.961 31.242 19.845 32.602 19.845 C 33.962 19.845 34.86 20.961 34.604 22.334 Z M 27.776 13.451 L 28.773 8.104 L 32.871 8.104 L 35.854 13.451 Z" fill="url(#gradient)" strokeWidth="0.34" stroke="rgba(0,0,0,0.3)" strokeMiterlimit="10" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="100%" stopColor="#ea580c" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full"></div>
                </div>
                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
                    Shipsy
                </span>
            </motion.div>

            {/* Right: User info + Actions */}
            <div className="flex items-center gap-4">
                <motion.button
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Bell className="w-5 h-5 text-gray-300" />
                </motion.button>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Welcome back</p>
                        <p className="text-xs text-gray-400">{username}</p>
                    </div>
                    <motion.div
                        className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center font-bold text-white shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        {username.charAt(0)}
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    </motion.div>
);

const StatCard = ({ stat, index }) => (
    <motion.div
        className="glassmorphism rounded-3xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -4 }}
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-300 text-sm font-medium mb-1">{stat.label}</p>
                <motion.p
                    className="text-3xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index + 0.3, duration: 0.4, type: "spring" }}
                >
                    {stat.value}
                </motion.p>
            </div>
            <motion.div
                className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
            >
                <stat.icon className="w-6 h-6 text-white" />
            </motion.div>
        </div>

        {/* Subtle glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-300`}></div>
    </motion.div>
);

const ShipmentCard = ({ shipment, index, onEdit, onDelete }) => (
    <motion.div
        className="glassmorphism rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer hover:shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        whileHover={{ scale: 1.01, y: -2 }}
    >
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-start gap-4">
                <motion.div
                    className={`w-4 h-4 rounded-full mt-1 ${shipment.status === 'Delivered' ? 'bg-green-400' :
                            shipment.status === 'Pending' ? 'bg-yellow-400' : 'bg-blue-400'
                        } shadow-lg`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                    <h3 className="font-bold text-white text-lg mb-1">{shipment.name}</h3>
                    <p className="text-gray-400 text-sm font-medium">ID: {shipment.id}</p>
                </div>
            </div>

            <motion.button
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </motion.button>
        </div>

        <div className="flex justify-between items-end">
            <div>
                <span className={`px-4 py-2 rounded-xl text-xs font-bold shadow-lg ${shipment.status === 'Delivered'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : shipment.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                    {shipment.status}
                </span>
                <p className="text-xs text-gray-500 mt-2 font-medium">{shipment.date}</p>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.button
                    onClick={() => onEdit(shipment.id)}
                    className="px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-xs text-blue-300 font-medium transition-all duration-200 border border-blue-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Edit
                </motion.button>
                <motion.button
                    onClick={() => onDelete(shipment.id)}
                    className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl text-xs text-red-300 font-medium transition-all duration-200 border border-red-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Delete
                </motion.button>
            </div>
        </div>
    </motion.div>
);

const CreateShipmentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

                <motion.div
                    className="relative w-full max-w-md glassmorphism rounded-3xl p-8 border border-white/20 shadow-2xl"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                            Create New Shipment
                        </h2>
                        <p className="text-gray-400 text-sm">Add a new shipment to track</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Shipment Name</label>
                            <input
                                type="text"
                                placeholder="Enter shipment name"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                            <input
                                type="text"
                                placeholder="Enter destination"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                            />
                        </div>

                        <div className="flex gap-3 pt-4">
                            <motion.button
                                onClick={onClose}
                                className="flex-1 px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-all text-gray-300 font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:shadow-xl font-medium text-white border border-orange-400/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Create
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function Dashboard() {
    const [username] = useState("Alex Chen");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [shipments, setShipments] = useState([
        { id: "SH001", name: "Electronics Batch A", status: "Pending", date: "Aug 14, 2025" },
        { id: "SH002", name: "Medical Supplies", status: "Delivered", date: "Aug 13, 2025" },
        { id: "SH003", name: "Auto Parts Shipment", status: "In Transit", date: "Aug 12, 2025" },
        { id: "SH004", name: "Fashion Items", status: "Delivered", date: "Aug 11, 2025" },
        { id: "SH005", name: "Home Appliances", status: "Pending", date: "Aug 10, 2025" },
        { id: "SH006", name: "Sports Equipment", status: "In Transit", date: "Aug 9, 2025" },
    ]);

    const handleEditShipment = (id) => {
        console.log("Edit shipment", id);
    };

    const handleDeleteShipment = (id) => {
        setShipments((prev) => prev.filter((s) => s.id !== id));
    };

    const stats = [
        {
            label: "Total Shipments",
            value: shipments.length,
            icon: Package,
            color: "from-blue-500 to-cyan-500"
        },
        {
            label: "Pending",
            value: shipments.filter(s => s.status === "Pending").length,
            icon: Clock,
            color: "from-yellow-500 to-orange-500"
        },
        {
            label: "Delivered",
            value: shipments.filter(s => s.status === "Delivered").length,
            icon: CheckCircle,
            color: "from-green-500 to-emerald-500"
        },
        {
            label: "In Transit",
            value: shipments.filter(s => s.status === "In Transit").length,
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500"
        },
    ];

    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            {/* Same background as landing page */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-blue-500/10"></div>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <style jsx>{`
                .glassmorphism {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>

            <DashboardNavbar username={username} />

            <motion.div
                className="pt-32 px-4 sm:px-6 lg:px-8 pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                            Dashboard
                        </h1>
                        <p className="text-gray-300 text-lg mt-2 font-light">Manage your shipments efficiently</p>
                    </div>

                    <motion.button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-400/20 overflow-hidden group flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Plus className="w-5 h-5" />
                        </motion.div>
                        <span className="relative z-10">Create Shipment</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>

                {/* Shipments Section */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent flex items-center gap-3">
                            <Package className="w-6 h-6 text-orange-500" />
                            Recent Shipments
                        </h2>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search shipments..."
                                    className="pl-10 pr-4 py-2 bg-slate-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {shipments.map((shipment, index) => (
                            <ShipmentCard
                                key={shipment.id}
                                shipment={shipment}
                                index={index}
                                onEdit={handleEditShipment}
                                onDelete={handleDeleteShipment}
                            />
                        ))}
                    </div>
                </motion.div>

                <CreateShipmentModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </motion.div>
        </div>
    );
}