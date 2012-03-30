var viewDir = __dirname+'/../views/root/'
    , layoutDir = __dirname+'/../views/layouts/'
    , redis = require('redis')
    , client = redis.createClient();

exports.index = function(req, res){
    res.render(viewDir+'index', {title: 'SS Bug Tracking', layout: layoutDir + 'layout'})
};
exports.signup = function(req, res){
  res.render(viewDir+'signup', { title: 'SS Bug Tracking' })
};
exports.signin = function(req, res){
  res.render(viewDir+'signin', { title: 'SS Bug Tracking' })
};
exports.edit = function(req, res){
  res.render(viewDir+'edit', { title: 'SS Bug Tracking' })
};
