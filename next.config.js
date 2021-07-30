require('dotenv').config();

const devConfig = {
    env: {
        API_URL: "https://sg-server-dev.herokuapp.com/",
    }
}

const prodConfig = {
    env: {
        API_URL: "https://sg-server-prod.herokuapp.com/",
    }
}

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = {
    ...config,
    target: 'serverless',
    distDir: 'out'
}