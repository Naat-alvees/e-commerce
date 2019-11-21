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

const _bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');



app.use(_bodyParser.json());
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/cliente']}));

app.post('/cliente', function(req, res) {

    
  const body = req.body;
  
  const login = find(login => login.email == body.email);
  

  if(!login || body.password != 'login') return res.sendStatus(401);
  
  var token = jwt.sign({idCliente: login.idCliente}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});

var routes = require('./routes/approutes'); //importing route
routes(app); //register tnhe route


// function getTodos(jwtString)
// {
//   var token = JWTDecode(jwtstring);
//   if( Date.now() < token.nbf*1000) {
//     throw new Error('Token not yet valid');
//   }
//   if( Date.now() > token.exp*1000) {
//     throw new Error('Token has expired');
//   }
//   if( token.iss != 'todoapi') {
//     throw new Error('Token not issued here');
//   }

//   var userID = token.uid;
//   var todos = loadUserTodosFromDB(userID);

//   return JSON.stringify(todos);
// }

