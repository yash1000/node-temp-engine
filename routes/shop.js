const path = require('path');
const express = require('express');

const route = express.Router();

const rootdir = require('../util/path');
const productsbyadmin = require('./admin');

route.get('/' , (req, res) => {
    // console.log(productsbyadmin.products);
    // res.sendFile(path.join(rootdir,'views','shop.html'));
    const products = productsbyadmin.products;
    res.render('shop',{prods:products,docTitle:'shop',path:'/',pageTitle:'Shop',hasproducts : products.length > 0, activeshop:true});
});

module.exports = route;