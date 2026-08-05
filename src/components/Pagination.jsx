import { useState } from 'react';

function Pagination() {
    const totalPages = 10;
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex items-center justify-center gap-2 min-h-screen bg-gray-100">
            <section className="w-[600px] space-y-3">
                <h1 className="text-2xl font-bold text-center">Drag & Drop</h1>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded border cursor-pointer ${
                                currentPage === page
                                    ? 'bg-black text-white'
                                    : 'bg-white'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </section>
        </div>
    );
}

export default Pagination;
