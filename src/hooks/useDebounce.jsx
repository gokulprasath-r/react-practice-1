import { useRef, useCallback } from "react";

export const useDebounce = (fn, delay) => {
    const timerRef = useRef(null);

    const debouncedFn = useCallback(
        (value) => {
            clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
                fn(value);
            }, delay);
        },
        [fn, delay]
    );

    return debouncedFn;
};
