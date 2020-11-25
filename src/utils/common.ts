export const debounce = (fn: Function, wait: number) => {
    let timerId: number | undefined = undefined;

    function debounced() {
        const context: any = this;
        const args = arguments;

        clearTimeout(timerId);

        timerId = window.setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }

    return debounced;
};

export const formateDateString = (date: string) => {
    try {
        const [year, month, day] = date.split('/');
        return `${year.padStart(3, '0')}/${month.padStart(
            2,
            '0'
        )}/${day.padStart(2, '0')}`;
    } catch (e) {
        return '';
    }
};
