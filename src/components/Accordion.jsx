import { useState } from "react";
import { accordion } from "../data/data.js"
function Accordion() {
    const [open, setOpen] = useState(null);
    const handleOpen = (index) => {
        console.log(index)
        setOpen(index === open ? null : index)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="w-[600px] space-y-3">
                {accordion.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-sm bg-white"
                    >
                        <div className="flex justify-between items-center  px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition" onClick={() => handleOpen(index)}>
                            <h2 className="font-medium text-gray-800">{item.title}</h2>
                            <span className="text-xl font-bold text-gray-500" >{open === index ? "-" : "+"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                            <p className="px-4 py-3 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    )
}

export default Accordion
