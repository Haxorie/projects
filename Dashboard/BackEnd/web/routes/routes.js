let express = require('express');
let app = express();

let controllers = [
    require('../controllers/AuthController'),
    require('../controllers/DashboardController')
];

controllers.forEach(function (controller) {
    app.use('/', controller);
});

// Export the router
module.exports = app;