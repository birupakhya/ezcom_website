var redis = require("redis");

  // Add your cache name and access key.
var client = redis.createClient(6379,'redisEZcom.redis.cache.windows.net', {auth_pass: 'JhDXfwE/zsP36hk6qgCkmoSKwfOnnuAbJqvd4ln5ZQU=', tls: {servername: 'redisEZcom.redis.cache.windows.net'}});

client.set("key1", "value", function(err, reply) {
        console.log(reply);
    });

client.get("key1",  function(err, reply) {
        console.log(reply);
    });