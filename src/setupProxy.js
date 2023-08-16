const { createProxyMiddleware } = require('http-proxy-middleware');

export default function(app){
    app.use(
        "/api/signup",
      createProxyMiddleware( {
        target: 'http://192.168.1.24:8080',
        changeOrigin: true
      })
    )
    
  };