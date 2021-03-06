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
//var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.post('/login', (req, res) => {
    let email = req.body.email
    let senha = req.body.senha


    mc.query("SELECT * FROM cliente WHERE email='"+email+"'and senha=md5('"+senha+"')", function (error, results, fields) {
        if (error) throw error;
        res.json({error: false, message: "User with the username and password getted by req.params", data: results})
    })
})

var routes = require('./routes/approutes'); //importing route
routes(app); //register tnhe route

