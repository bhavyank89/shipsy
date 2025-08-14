import React from "react";
import ShipmentActions from "./ShipmentActions";

export default function ShipmentsTable({ shipments, onEdit, onDelete }) {
    return (
        <div className="mt-6">
            {/* Large Screen - Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-800 text-white">
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((shipment) => (
                            <tr key={shipment.id} className="border-b border-slate-700">
                                <td className="p-3">{shipment.id}</td>
                                <td className="p-3">{shipment.name}</td>
                                <td className="p-3">{shipment.status}</td>
                                <td className="p-3">{shipment.date}</td>
                                <td className="p-3">
                                    <ShipmentActions
                                        onEdit={() => onEdit(shipment.id)}
                                        onDelete={() => onDelete(shipment.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View - Card Format */}
            <div className="md:hidden flex flex-col gap-4">
                {shipments.map((shipment) => (
                    <div
                        key={shipment.id}
                        className="bg-slate-800 p-4 rounded-lg shadow-lg text-white"
                    >
                        <p><strong>ID:</strong> {shipment.id}</p>
                        <p><strong>Name:</strong> {shipment.name}</p>
                        <p><strong>Status:</strong> {shipment.status}</p>
                        <p><strong>Date:</strong> {shipment.date}</p>
                        <div className="mt-3">
                            <ShipmentActions
                                onEdit={() => onEdit(shipment.id)}
                                onDelete={() => onDelete(shipment.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
