process.env.PORT = process.env.PORT || 3000 ;
process.env.NODE_ENV = process.env.NODE_ENV || "Desarrollo"; 

// let host_db  
// let user_db 
// let password_db
// let database_db 
// let port_db

let host_db , user_db , password_db, database_db ,  port_db;

if(process.env.NODE_ENV === "Desarrollo"){ // de forma local

    host_db         =  'localhost',
    user_db         = 'postgres',
    password_db     = 'root',
    database_db     = 'notasLocal',
    port_db         = '5432'

}
else{ // de forma remota 

    host_db         =       process.env.HOST_DBa;
    user_db         =       process.env.USER_DBa;
    password_db     =       process.env.PASSWORD_DBa;
    database_db     =       process.env.DATABASE_DBa;
    port_db         =       process.env.PORT_DBa;

}

module.exports = {
    h  : host_db         ,
    u  : user_db         ,
    p  : password_db     ,
    d  : database_db     ,
    pd  : port_db         
}
