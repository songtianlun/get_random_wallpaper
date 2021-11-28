const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://source.unsplash.com',
        changeOrigin: true,
        pathRewrite: { //路径替换
            '^/api': '/random', // axios 访问/api == target + /v1
        }
    }));
};
