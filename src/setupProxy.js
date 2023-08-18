const { createProxyMiddleware } = require('http-proxy-middleware');

export default function(app){
    app.use(
        "/api/signup",
      createProxyMiddleware( {
        target: 'http://172.20.10.8:8080',
        changeOrigin: true
      })
    )
    
  };