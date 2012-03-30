var viewDir = __dirname+'/../views/'
    , layoutDir = __dirname+'/../views/layouts/'
    , redis = require('redis')
    , client = redis.createClient();

exports.index = function(req, res){
    res.render(viewDir+'index', {title: 'SS Bug Tracking', layout: layoutDir + 'layout'})
};
exports.edit = function(req, res){
  res.render(viewDir+'edit', { title: 'SS Bug Tracking' })
};
