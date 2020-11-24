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
