import { useEffect, useState, } from "react";
import { suggestions } from "../data/data.js";
import { useDebounce } from "../hooks/useDebounce.jsx";

function Debounce() {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [filteredData, setFilteredData] = useState(suggestions);

    const search = useDebounce((value) => {
        const dat = suggestions.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(dat);
        setValue1(value)
    }, 500)

    useEffect(() => {
        search(value);
    }, [search, value]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white p-6 rounded-xl shadow-lg space-y-3 relative">
                <h1 className="text-2xl font-bold text-center">Debounce Search</h1>
                <input
                    type="text"
                    placeholder="Search country"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <ul className="absolute left-6 right-6 top-[105px] bg-white border rounded-md shadow-md max-h-48 overflow-y-auto z-10 ">
                    {
                        filteredData.length > 0 ? filteredData.map((item, index) => {
                            return <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {item.split(new RegExp(`(${value1})`, "gi")).map((part, i) =>
                                    part.toLowerCase() === value1.toLowerCase() ? (
                                        <span key={i} className="bg-gray-600 text-white">
                                            {part}
                                        </span>
                                    ) : (
                                        part
                                    )
                                )}
                            </li>
                        }) : <li className=" px-4 py-2 cursor-pointer hover:bg-gray-100text-center">No results found</li>
                    }
                </ul>

            </div>
        </div>
    );
}

export default Debounce;
