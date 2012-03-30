var routesIndex = require('../routes/index.js');
var routesUser = require('../routes/user.js');
var routesItem = require('../routes/item.js');
module.exports = function(app) {
    app.get('/', routesIndex.index);
    app.get('/user', routesUser.index);
    app.get('/item', routesItem.index);
};
