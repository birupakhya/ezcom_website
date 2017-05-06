var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var redis = require("redis")

var client = redis.createClient(6379,'redisEZcom.redis.cache.windows.net', {auth_pass: 'JhDXfwE/zsP36hk6qgCkmoSKwfOnnuAbJqvd4ln5ZQU='});

var searchKey = "Top Products";

/* GET home page. */
router.get('/', function(req, res, next) {
        var cacheProductChunks =[];
        var productChunks = [];

        //getting products from cache
        var cacheProducts = client.get(searchKey, function (err, result) {
              var chunkSize = 3;
              var obj = JSON.parse(result.replace(/'/g,'"'));
              for (var i = 0; i < obj.length; i += chunkSize) {
                cacheProductChunks.push(obj.slice(i, i + chunkSize));
              }
              console.log("Redis");
		
        });

        //getting products from the database
        var products = Product.find(function(err, docs){
            var chunkSize = 3;
            for (var i=0; i < docs.length; i += chunkSize){
                productChunks.push(docs.slice(i, i + chunkSize));
        }
        console.log("DB")
        res.render('shop/index', { title: 'ezcom e-Commerce' , products: productChunks,cacheProducts:cacheProductChunks});
        });

    console.log("cache"+cacheProductChunks);

});

module.exports = router;