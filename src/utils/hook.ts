import { useCallback, useEffect, useRef } from 'react';
import { debounce } from './common';

export const useDebounce = (callback: any, delay: number) => {
    const memoizedCallback = useCallback(callback, [callback]);
    const debouncedFn = useRef(debounce(memoizedCallback, delay));

    useEffect(() => {
        debouncedFn.current = debounce(memoizedCallback, delay);
    }, [memoizedCallback, debouncedFn, delay]);

    return debouncedFn.current;
};
