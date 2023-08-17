const { createProxyMiddleware } = require('http-proxy-middleware');

export default function(app){
    app.use(
        "/api/signup",
      createProxyMiddleware( {
        target: 'http://172.30.1.67:8080',
        changeOrigin: true
      })
    )
    
  };