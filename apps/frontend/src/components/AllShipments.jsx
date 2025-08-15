import React, { useState } from "react";
import { Package, Search } from "lucide-react";
import ShipmentsTable from './ShipmentsTable';

export default function AllShipments() {
    const [shipments, setShipments] = useState([
        { id: "SH001", name: "Electronics Batch A", status: "Pending", date: "Aug 14, 2025" },
        { id: "SH002", name: "Medical Supplies", status: "Delivered", date: "Aug 13, 2025" },
        { id: "SH003", name: "Auto Parts Shipment", status: "In Transit", date: "Aug 12, 2025" },
        { id: "SH004", name: "Fashion Items", status: "Delivered", date: "Aug 11, 2025" },
        { id: "SH005", name: "Home Appliances", status: "Pending", date: "Aug 10, 2025" },
        { id: "SH006", name: "Sports Equipment", status: "In Transit", date: "Aug 9, 2025" },
    ]);

    const handleEditShipment = id => console.log("Edit shipment", id);
    const handleDeleteShipment = id => setShipments(prev => prev.filter(s => s.id !== id));

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-orange-500" />
                All Shipments
            </h2>

            <div className="mb-4 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search shipments..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 text-sm"
                />
            </div>

            <ShipmentsTable shipments={shipments} onEdit={handleEditShipment} onDelete={handleDeleteShipment} />
        </div>
    );
}
