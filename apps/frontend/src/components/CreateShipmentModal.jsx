import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default CreateShipmentModal;