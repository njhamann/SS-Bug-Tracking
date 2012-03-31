var viewDir = __dirname+'/../views/root/'
    , layoutDir = __dirname+'/../views/layouts/'
    , redis = require('redis')
    , client = redis.createClient();

exports.index = function(req, res){
    res.render(viewDir+'index', {title: 'Tontra', layout: layoutDir + 'layout'})
};
exports.signup = function(req, res){
  res.render(viewDir+'signup', { title: 'Tontra', layout: layoutDir + 'layout' })
};
exports.signin = function(req, res){
  res.render(viewDir+'signin', { title: 'Tontra', layout: layoutDir + 'layout' })
};
exports.edit = function(req, res){
  res.render(viewDir+'edit', { title: 'Tontra', layout: layoutDir + 'layout' })
};
