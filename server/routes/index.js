var express = require('express');
// const pool = require('../utilities/util');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}))
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root',
     port:3307,
     password: 'mariadb',
     database: 'NodeJS',
     connectionLimit: 50
});
// const {asyncFunction} = require('../utilities/util')
// import {asyncFunction} from '../utilities/util'

router.get('/',async (req, res)=> {
  console.log("ht")
  let conn;
  try{
    console.log("inside try")
    const conn= await pool.getConnection();
    console.log(conn)
    const rows =await conn.query('select name from user');
    console.log(rows)
    res.status(200).json({rows: "rows"})

  } catch(error){
    res.status(400).json({error:'Getting error'})
  }
  // asyncFunction();
  // res.status(200).json({"message":'My first route'})
});

module.exports = router;
