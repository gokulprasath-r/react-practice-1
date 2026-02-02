import { useRef } from "react";

export const useThrottle = (fn, limit) => {
    const limitRef = useRef(null);
    return function (value) {
        const now = Date.now();
        if (now - limitRef.current >= limit) {
            fn(value);
            limitRef.current = now;
        }
    }
};
