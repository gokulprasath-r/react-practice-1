import { useRef, useState, } from "react";
import { useThrottle } from "../hooks/useThrottle.jsx";

function Throttle() {
    const [value, setValue] = useState("");
    const prevRef = useRef(null);

    const scrollFn = (e) => {
        prevRef.current = value;
        setValue(new Date().toLocaleTimeString().toString());
    }

    const handleScroll = useThrottle(scrollFn, 3000);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative w-[400px] bg-white p-6 rounded-xl shadow-lg space-y-3">
                <h1 className="text-2xl font-bold text-center">Throttle</h1>
                <h3>Current : {value}</h3>
                <h3>Previous : {prevRef.current}</h3>
                <div className=" border max-h-64 h-164 overflow-y-scroll" onScroll={(e) => handleScroll(e)}>
                    <p className="text-center font-bold">Start Scrolling inside box</p>
                    {Array.from({ length: 500 }).map((_, i) => (
                        <div key={i} className="p-2">

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Throttle;
