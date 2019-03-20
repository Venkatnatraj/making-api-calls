const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'https://test.v2.fleetconnect.io' ,changeOrigin:true,secure:false}));
};