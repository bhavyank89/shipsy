import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CreateShipmentModal = ({ isOpen, onClose, onCreate }) => {
    const [form, setForm] = useState({
        title: "",
        fragile: "No",
        status: "NEW",
        weight: "",
        distance: "",
        baseRate: "",
        cost: 0,
    });

    // Auto-calculate cost whenever relevant values change
    useEffect(() => {
        const weightNum = parseFloat(form.weight) || 0;
        const baseRateNum = parseFloat(form.baseRate) || 0;
        const distanceNum = parseFloat(form.distance) || 0;

        const calculatedCost = weightNum * baseRateNum + distanceNum * 0.5;
        setForm((prev) => ({ ...prev, cost: calculatedCost }));
    }, [form.weight, form.baseRate, form.distance]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (onCreate) onCreate(form);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 overflow-y-auto"
                        style={{ maxHeight: "90vh" }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Create New Shipment</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Fragile */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fragile</label>
                                <select
                                    name="fragile"
                                    value={form.fragile}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                >
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>

                            {/* Status */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                >
                                    <option value="NEW">New</option>
                                    <option value="IN_TRANSIT">In Transit</option>
                                    <option value="DELIVERED">Delivered</option>
                                    <option value="CANCELLED">Cancelled</option>
                                </select>
                            </div>

                            {/* Weight */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={form.weight}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Distance */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
                                <input
                                    type="number"
                                    name="distance"
                                    value={form.distance}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Base Rate */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Base Rate</label>
                                <input
                                    type="number"
                                    name="baseRate"
                                    value={form.baseRate}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            {/* Cost (read-only) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cost (USD)</label>
                                <input
                                    type="number"
                                    value={form.cost.toFixed(2)}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-5 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition-colors"
                            >
                                Create
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CreateShipmentModal;
