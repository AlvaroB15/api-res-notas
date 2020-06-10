// importamos lagunas funciones que usaremois del modulo pg, el cual nos permitira tener una conexion correcta con psql

const {Pool} = require('pg'); // Pool es un conjunto de conexiones, con lo cual nos podremos conectar a psql

const a = require('../config/config');

const pool = new Pool({          // se guarda en una constante para poder reutlizar esta conexion a psql
    host        :       a.h,
    user        :       a.u,
    password    :       a.p,
    database    :       a.d,
    port        :       a.pd
});


const getNotas = async (req,res) => { // para que el script sql, sea sincronico, se le pone async y su query como await
    // res.send('users');
    const response = await pool.query("SELECT * FROM task ORDER BY created_at DESC"); // como quiero que el servidor siga haciendo las demas cosas, por eso le pongo el await, ya que con eso el servidor digue haciendo las demas cosas, y cuando este prerparada el response, recien lo obtiene
    res.status(200).json(response.rows); // es opcional poner el status , mas expicaso esta en el getNotasById
    
}

const getNotasById = async (req, res) => {
    // res.send('El id mandado es: '+ req.params.id);
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM task WHERE id = $1", [id]); 
    res.json(response.rows); // no es necesario poner el status(200) ya que por defecto viene eso, tmb puedo asignarle el 404,400, etc
}

const createNota = async (req,res) => {

    const { title, description } = req.body;

    const response = await pool.query("INSERT INTO task( title, description ) VALUES ($1, $2)", [title, description]);
   
    // console.log(response);
    res.send("Inserccion con exito");

    // res.json({
    //     message: 'Nota agregada correctamente',
    //     body: {
    //         nota : { title, description }
    //     }
    // });
}

// todavia no se puede USAR ya q probablemente se haga dos consultas
const deleteNotaById = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query("DElETE FROM task WHERE id = $1", [id]);
    // console.log(response);
    res.json('Eliminado correctamente.')
}


const updateNotaById = async (req,res) =>{
    // res.send('actualizar');
    const id = req.params.id;
    
    const { title, description } = req.body;
    
    const response = await pool.query("UPDATE task SET title = $1, description = $2 WHERE id = $3", 
    [ title, description, id]);

    res.send('Actualizado correctamente el registro con id: '+id);
    console.log(response);
    
}

module.exports = {
    getNotas, getNotasById, createNota, deleteNotaById, updateNotaById
};