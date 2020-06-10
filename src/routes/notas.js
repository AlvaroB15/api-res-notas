const {Router} = require('express'); // forma de importar la funcion Router del paquete express
const router = Router(); // ejecutando la funcion

// Importamos solo la funcion que usaremos, en este caso sera getUsers, de index.controller.js

// const { getNotas, getNotasById, deleteAlbumById }  = require('../controllers/notasControllers')
const { getNotas, getNotasById, createNota, deleteNotaById, updateNotaById}  = require('../controllers/notasControllers')


router.get( '/notas', getNotas);  // aqui estamos diciendo al servidor que cuando pida get, con la ruta /users, entonces hara lo de la funcion getUsers

router.get( '/notas/:id' , getNotasById); // le pongo el xx, solo para darme cuenta y recordar que no necesariamente debe ser id, y eso tambien lo cambias cundo quieras hacer las respuesta para ser ejecuta al query.

router.post('/notas', createNota);

router.delete('/notas/:id', deleteNotaById);

router.put('/notas/:id', updateNotaById);

module.exports = router;