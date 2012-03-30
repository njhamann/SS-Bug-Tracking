var routesIndex = require('../routes/index.js')
    , routesUser = require('../routes/user.js')
    , routesItem = require('../routes/item.js')
    , routesRedis = require('../routes/redis_test.js');

module.exports = function(app) {
    app.get('/', routesIndex.index);
    app.get('/user', routesUser.index);
    app.get('/item', routesItem.index);
    app.get('/redis_test', routesRedis.index);
};
