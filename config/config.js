// Module dependencies.
require('dotenv').config();

// get environment
const env = process.env.NODE_ENV;

// development environment variables
const development = {
    // app variable (port)
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000
    },
    //database variable (DBhost, DBport, DBname)
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        user: process.env.DEV_DB_USER || "root",
        database: process.env.DEV_DB_NAME || 'CAPI_DB',
        password: process.env.DEV_DB_PASSWORD || '123456',
        dialect: 'mysql',
    },
};

const config = {
    development
};

module.exports = config[env];