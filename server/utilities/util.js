const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root',
     port:3307,
     password: 'mariadb',
     database: 'NodeJS',
     connectionLimit: 5
});

pool.getConnection((err, connection) => {
    try{
        if(connection) connection.release();

    return;

    } catch(err){
        throw err;

    } finally {
        if(connection){
            connection.end();
        }
    }
});
module.exports = pool;
// async function asyncFunction() {
//   let conn;
//   try {
// 	conn = await pool.getConnection();
// 	const rows = await conn.query("SELECT * from user");
// 	console.log(rows); //[ {val: 1}, meta: ... ]
	// const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	// console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

//   } catch (err) {
// 	throw err;
//   } finally {
// 	if (conn) return conn.end();
//   }
// };

// module.exports.asyncFunction = this.asyncFunction;