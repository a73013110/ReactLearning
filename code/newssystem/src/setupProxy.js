const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/bilibiliApi',
        createProxyMiddleware({
            target: 'https://api.bilibili.com',
            changeOrigin: true,
        })
    );
};