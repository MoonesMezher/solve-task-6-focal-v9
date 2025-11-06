require("dotenv").config();

const config = {
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV
}

module.exports = config;