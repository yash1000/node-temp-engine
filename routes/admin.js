// const path = require('path');
const express = require('express');

// const rootdir = require('../util/path');

const route = express.Router();

const products = [];

route.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    res.render('add-product',{pagetitle:'add-product',path:'/admin/add-product',pageTitle:'Add-product', productcss:true,activeprod:true});
});

route.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({
        title: req.body.title
    })
    res.redirect('/');
});

module.exports = {
    routes: route,
    products: products
};
