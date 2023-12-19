const throttle = (func: Function, delay: number) => {
    let throttled = false;
    return (...args: any[]) => {
        if (!throttled) {
            func(...args);
            throttled = true;
            setTimeout(() => {
                throttled = false;
            }, delay);
        }
    }
}

const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    }

}