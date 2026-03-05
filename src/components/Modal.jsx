import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [modal4Open, setModal4Open] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <button
                onClick={() => setModal1Open(true)}
                className="px-4 py-2 mr-3 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
            >
                Open Portal Modal
            </button>
            <button
                onClick={() => setModal3Open(true)}
                className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
            >
                Open Normal Modal
            </button>

            <PortalModal
                isOpen={modal1Open}
                onClose={() => setModal1Open(false)}
                title="Modal 1"
            >
                <p className="text-gray-600 mb-4">
                    This is Modal 1. Click below to open nested Modal 2.
                </p>
                <button
                    onClick={() => setModal2Open(true)}
                    className="px-4 py-2 mr-3 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
                >
                    Open Modal 2
                </button>
                <button
                    onClick={() => setModal1Open(false)}
                    className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
                >
                    Close
                </button>
            </PortalModal>

            <PortalModal
                isOpen={modal2Open}
                onClose={() => setModal2Open(false)}
                title="Modal 2"
            >
                <p className="text-gray-600 mb-6">
                    This is Modal 2, nested inside Modal 1!
                </p>
                <button
                    onClick={() => setModal2Open(false)}
                    className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
                >
                    Close
                </button>
            </PortalModal>

            {modal3Open && (
                <div className="fixed inset-0 backdrop-blur-sm bg-gray-300 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-8 w-96 shadow-xl">
                        <h2 className="text-xl font-bold mb-3">Modal 3 </h2>
                        <p className="text-gray-600 mb-4">
                            This is Modal 3. Click below to open a nested Modal
                            4.
                        </p>

                        <button
                            onClick={() => setModal4Open(true)}
                            className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer mr-2"
                        >
                            Open Modal 4
                        </button>
                        <button
                            onClick={() => setModal3Open(false)}
                            className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {modal4Open && (
                <div className="fixed inset-0 backdrop-blur-sm bg-gray-300 bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-8 w-96 shadow-2xl">
                        <h2 className="text-xl font-bold mb-3">Modal 4 </h2>
                        <p className="text-gray-600 mb-6">
                            This is Modal 4, nested inside Modal 3
                        </p>
                        <button
                            onClick={() => setModal4Open(false)}
                            className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function PortalModal({ isOpen, title, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-96 shadow-xl">
                <h2 className="text-xl font-bold mb-3">{title}</h2>
                {children}
            </div>
        </div>,
        document.body,
    );
}
