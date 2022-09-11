/**
 * 反向代理
 * 此設定異動後必須重啟Server
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        "/ajax",
        createProxyMiddleware({
            target: "https://i.maoyan.com",
            changeOrigin: true,
            headers: {
                "Cookie": "_lxsdk_cuid=182a1a8b72bc8-097c52db097ad4-26021d51-2a3000-182a1a8b72cc8; recentCis=151; uuid_n_v=v1; iuuid=F6812C901C9C11EDABA1E3CF9445FF11557745DA670F42469F6CEA04C65E7E7D; ci=1%2C%E5%8C%97%E4%BA%AC; ci=1%2C%E5%8C%97%E4%BA%AC; ci=1%2C%E5%8C%97%E4%BA%AC; featrues=[object Object]; _last_page=c_dmLad; _lxsdk=F6812C901C9C11EDABA1E3CF9445FF11557745DA670F42469F6CEA04C65E7E7D; selectci=true; _lx_utm=utm_source%3Dgoogle%26utm_medium%3Dorganic; selectci=true; selectci=true; _lxsdk_s=182da9a54f8-ce0-89d-cb3%7C%7C68",
            }
        })
    );

    app.use(
        "/graphql",
        createProxyMiddleware({
            target: "http://localhost:3000",
            changeOrigin: true
        })
    );
}