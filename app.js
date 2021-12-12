const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware')//反向代理
const app = express();

app.use(express.static(path.join(__dirname, '/build')));
// app.use('/help', express.static(path.join(__dirname, '/docs/build')));

//响应react项目中的/api*的请求（api和前端页面不在同一个域名）
//app.use('/api',proxy({ target: 'https://appwrite.frytea.com/v1', changeOrigin: true }))
//app.use(proxy('/api', { target: 'https://appwrite.frytea.com/v1' }));
app.use('/api', createProxyMiddleware({
    target: 'https://source.unsplash.com',
    changeOrigin: true,
    pathRewrite: { //路径替换
        '^/api': '/random', // axios 访问/api == target + /v1
    }
}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.LEANCLOUD_APP_PORT || 3010;
app.listen(port);

console.log('App is listening on port ' + port);
