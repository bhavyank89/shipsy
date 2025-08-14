import React from "react";

export default function ShipmentActions({ onEdit, onDelete }) {
    return (
        <div className="flex gap-2">
            <button
                onClick={onEdit}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
                Edit
            </button>
            <button
                onClick={onDelete}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
                Delete
            </button>
        </div>
    );
}
