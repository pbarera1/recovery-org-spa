// const env = 'undefined' !== typeof window ? window.__ENV__ : process.env;

// export default env;

let env = {};

if (typeof window !== 'undefined' && window.__ENV__) {
    env = window.__ENV__;
} else if (process && process.env) {
    env = process.env;
}

export default env;
