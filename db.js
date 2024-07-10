const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'parcel'
});

const connect = async function(){
connection.connect((err)=>{
    if(err){
        console.log('error connting', err);
        return;
    }

    console.log("database connection success")


    });
}



connect();

module.exports = connection;
