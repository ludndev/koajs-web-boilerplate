module.exports = {
    appEnv: () => {
        return process.env.APP_ENV;
    },

    appHost: () => {
        return process.env.APP_HOST ?? '0.0.0.0';
    },

    appName: () => {
        return process.env.APP_NAME;
    },

    appPort: () => {
        return process.env.APP_PORT ?? 3000;
    },

    isLocal: () => {
        return process.env.APP_ENV === 'local';
    },

    isProd: () => {
        return process.env.APP_ENV === 'production';
    },
};
