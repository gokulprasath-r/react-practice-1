import { useRef } from "react";

export const useDebounce = (fn, delay) => {
    const timerRef = useRef(null);

    const debouncedFn = (value) => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            fn(value);
        }, delay);
    }
    return debouncedFn;
};
