// src/components/Pagination.jsx
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    if (totalPages <= 1) return null; // No pagination needed

    return (
        <div className="flex justify-center mt-6 gap-2">
            <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-medium disabled:opacity-50 transition-colors duration-200"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={`px-3 py-1 rounded font-medium transition-colors duration-200 ${currentPage === i + 1
                            ? "bg-orange-400 text-white shadow-md"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                    onClick={() => goToPage(i + 1)}
                >
                    {i + 1}
                </button>
            ))}

            <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-medium disabled:opacity-50 transition-colors duration-200"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
