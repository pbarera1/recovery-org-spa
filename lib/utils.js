export const getProp = (obj, keys, defaultValue = null) => {
    return (
        keys.split('.').reduce((acc, key) => {
            return acc == null ? acc : acc[key]; // eslint-disable-line
        }, obj) || defaultValue
    );
};
