const express = require('express');
const mariadb = require('mariadb');
const _ = require('lodash');
const bodyparser = require('body-parser');
var cors = require('cors')

// Database details
var DB_HOST = "localhost";
var DB_USER = "root";
var DB_NAME = "Demo";
var DB_PASSWORD = "mariadb";


var app = express();

app.use(cors())

app.use(bodyparser.json())

app.use(express.urlencoded({ extended: true }))
app.listen(5000);

app.get('/users', (request, response) => {
      fetchUsers(request,response);
});
app.get('/user/:id', (request, response) => {
  fetchUserByID(request,response);
});
app.post('/login', (request, response) => {
  fetchLoggedInUser(request, response);
});
function fetchLoggedInUser(request,response) {
  // console.log("i am body", request.body.email)
  var result = "";
  mariadb.createConnection({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port:3307,
  })
    .then(conn => {
      const email = `${request.body.email}`;
      const password= `${request.body.password}`
      console.log(email, password)
      const query=`select * from user where id=2`
      // const query = `select * from user where email=${email} and password=${password}`
      result = conn.query(query);
      console.log(result);
      _.difference(result['meta']);
      return result;
    }).then((result) => {
      response.status(200).json({ "data": result });
    })
    .catch(err => {
      response.status(500).json({ "status": "Failed", "message": err.message });
    });
}
function fetchUserByID(request,response) {
  var result = "";
  mariadb.createConnection({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port:3307,
  })
    .then(conn => {
      const query = `select * from user where id=${request.params.id}`
      result = conn.query(query);
      console.log(result);
      _.difference(result['meta']);
      return result;
    }).then((result) => {
      response.status(200).json({ "data": result[0] });
    })
    .catch(err => {
      response.status(500).json({ "status": "Failed", "message": err.message });
    });
}
function fetchUsers(request,response) {
  var result = "";
  mariadb.createConnection({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port:3307,
  })
    .then(conn => {
      result = conn.query("SELECT * FROM user");
      console.log(result);
      _.difference(result['meta']);
      return result;
    }).then((result) => {
      response.status(200).json({ "data": result });
    })
    .catch(err => {
      response.status(500).json({ "status": "Failed", "message": err.message });
    });
}