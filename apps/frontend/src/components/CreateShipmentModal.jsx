import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateShipmentModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-slate-900 p-6 rounded-lg w-full max-w-md shadow-lg text-white"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                >
                    <h2 className="text-lg font-bold mb-4">Create Shipment</h2>
                    {/* Form fields will be added later */}
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded"
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
