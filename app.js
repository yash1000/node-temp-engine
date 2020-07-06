const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
// const expressHbs = require('express-handlebars');

const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')

const app = express();
// app.engine('hbs',expressHbs({layoutsDir:'views/layouts/',defaultLayout:'main-layout',extname: "hbs",}))
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes.routes);
app.use(shoproutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
    res.status(404).render('page-not-found',{pagenotfound:'Page-not-found',pageTitle:'Page-not-found'});
})

app.listen(8000);