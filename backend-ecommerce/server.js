const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    port = process.env.PORT || 3000;

var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionSucessStatus: 200
}

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});
mc.connect();

app.listen(port);
console.log('API server started on:'+port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register tnhe route