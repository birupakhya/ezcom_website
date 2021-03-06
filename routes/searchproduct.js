var express = require('express');
var searchproductrouter = express.Router();
var AzureSearch = require('azure-search');
var azureclient = AzureSearch({
	url:"https://ecommsearch.search.windows.net",
    key:"0696A867CB79E294DA21D82B1A68278B"
});

searchproductrouter.get('/:input', function (req, res, next) {
searchQuery = req.query['searchquery'];
azureclient.suggest('products',{search:searchQuery},function(err,result,raw){
console.log(result);
  });
});

searchproductrouter.get('/', function(req, res, next) {
  console.log('In search  product');
  searchQuery = req.query['searchquery']
  console.log(searchQuery)
  
  // azureclient.suggest('products',{search:searchQuery},function(err,result,raw){
  // console.log(result);
  // });

  // retrieve a document from an index
azureclient.lookup('products',searchQuery , function(err,result){
	// optional error, or the document
  console.log(result);
});

  // azureclient.suggest('products',{search:searchQuery, suggesterName:'suggest'},function(err,result){
  // console.log(result);
  // });

  azureclient.suggest('products', {search:searchQuery,suggesterName:'suggest',fuzzy: true,searchFields: "title, description,imagePath","api-version":"2016-09-01"},function(err,result){
  console.log(result);
  });


  azureclient.search('products', {search: searchQuery},function(err,results,raw){
    console.log(results);
    console.log(results.length)
    res.render('shop/searchproduct', {searchproducts: results})
    });

 });


module.exports = searchproductrouter;