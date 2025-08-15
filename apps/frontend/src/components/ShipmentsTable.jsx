import React, { useState } from "react";
import ShipmentActions from "./ShipmentActions";
import Pagination from "./Pagination";
import { motion, AnimatePresence } from "framer-motion";

export default function ShipmentsTable({ shipments, onEdit, onDelete }) {
    const [currentPage, setCurrentPage] = useState(1);
    const shipmentsPerPage = 5;

    const totalPages = Math.ceil(shipments.length / shipmentsPerPage);
    const indexOfLastShipment = currentPage * shipmentsPerPage;
    const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

    return (
        <div className="mt-6">
            {/* Table Container */}
            <div className="overflow-x-auto glassmorphism rounded-2xl p-4 shadow-lg border border-gray-300/30">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-blue-100 text-blue-900 uppercase text-sm tracking-wide rounded-xl">
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {currentShipments.map((shipment) => (
                                <motion.tr
                                    key={shipment.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                                >
                                    <td className="p-3 font-medium text-gray-900">{shipment.id}</td>
                                    <td className="p-3 text-gray-800">{shipment.name}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-sm font-semibold ${shipment.status === "Delivered"
                                                    ? "bg-green-100 text-green-800"
                                                    : shipment.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-purple-100 text-purple-800"
                                                }`}
                                        >
                                            {shipment.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-gray-800">{shipment.date}</td>
                                    <td className="p-3">
                                        <ShipmentActions
                                            onEdit={() => onEdit(shipment.id)}
                                            onDelete={() => onDelete(shipment.id)}
                                        />
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

            <style jsx>{`
                .glassmorphism {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(20px);
                }
            `}</style>
        </div>
    );
}
