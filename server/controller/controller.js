const mariadb = require('mariadb');
const _ = require('lodash');
const bodyparser = require('body-parser');


// Database details
var DB_HOST = "localhost";
var DB_USER = "root";
var DB_NAME = "new";
var DB_PASSWORD = "mariadb";



exports.fetchLoggedInUser = (request,response) => {
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
        const password= `${request.body.password}`;
        const em1=conn.escape(email);
        const pw1=conn.escape(password);
        console.log(email, password);
        const query = `select * from user where email=${em1} and password=${pw1}`
        result = conn.query(query);
        console.log(result.then(response));
        _.difference(result['meta']);
        return result;
      }).then((result) => {
        response.status(200).json({ "data": result });
      })
      .catch(err => {
        response.status(500).json({ "status": "Failed", "message": err.message });
      });
  }
  exports.fetchUserByID = (request,response) => {
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
  exports.fetchUsers = (request,response) => {
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