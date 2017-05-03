var express = require('express');
var AzureSearch = require('azure-search');
var azureclient = AzureSearch({
	url:"https://shoppingcartsearch.search.windows.net",
    key:"CEAE8BFFF421FB94B60836FFE85305E8"
});

var search = azureclient.search(indexName, {search: queryterm});

module.exports = search;
