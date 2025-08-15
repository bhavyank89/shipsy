import React, { useState } from "react";
import { Plus, Package, Search } from "lucide-react";
import ShipmentsTable from './ShipmentsTable';
import CreateShipmentModal from "./CreateShipmentModal";
import {motion} from 'framer-motion';

export default function MyShipments() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [shipments, setShipments] = useState([
        { id: "SH001", name: "Electronics Batch A", status: "Pending", date: "Aug 14, 2025" },
        { id: "SH003", name: "Auto Parts Shipment", status: "In Transit", date: "Aug 12, 2025" },
    ]);

    const handleEditShipment = id => console.log("Edit shipment", id);
    const handleDeleteShipment = id => setShipments(prev => prev.filter(s => s.id !== id));

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Package className="w-6 h-6 text-orange-500" />
                    My Shipments
                </h2>
                <motion.button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-orange-400 text-white px-4 py-2 rounded-xl font-semibold"
                >
                    <Plus className="inline w-4 h-4 mr-1" />
                    Create Shipment
                </motion.button>
            </div>

            <div className="mb-4 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search shipments..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 text-sm"
                />
            </div>

            <ShipmentsTable shipments={shipments} onEdit={handleEditShipment} onDelete={handleDeleteShipment} />

            <CreateShipmentModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
        </div>
    );
}
