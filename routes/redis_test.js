var viewDir = __dirname+'/../views/'
    , layoutDir = __dirname+'/../views/layouts/'
    , redis = require('redis')
    , client = redis.createClient();

exports.index = function(req, res){

    client.on("error", function (err) {
        console.log("Error " + err);
    });
    /*
    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });
    */
    client.hset('user2:njhamann@gmail.com', 'name', 'noah', redis.print);
    client.hset('user','njhamann@gmail.com', '{"name":"noah"}', redis.print);
    client.hgetall('user2:njhamann@gmail.com', function(err, replies){
        console.log('hgetall:');
        console.log(replies);
    });
    client.hget('user2:njhamann@gmail.com', 'name', function(err, replies){
        console.log('hget:');
        console.log(replies);
    });
    /*
    client.hget('user','njhamann@gmail.com',function(err, replies){
        console.log(replies);
    });
    */

    res.render(viewDir+'index', {title: 'SS Bug Tracking', layout: layoutDir + 'layout'})
};
exports.edit = function(req, res){
  res.render(viewDir+'edit', { title: 'SS Bug Tracking' })
};
