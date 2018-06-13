export const getProp = (obj, keys, defaultValue = null) => {
    if (Array.isArray(obj)) {
        console.log('First argument must be an object with named keys');
        return defaultValue;
    }

    return (
        keys.split('.').reduce((acc, key) => {
            return acc == null ? acc : acc[key]; // eslint-disable-line
        }, obj) || defaultValue
    );
};
