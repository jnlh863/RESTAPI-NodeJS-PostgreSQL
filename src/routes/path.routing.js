const {Router} = require('express');
const {getUsers, addUsers, updtingUsers, deleteUsers, getUser} = require('../controllers/funciones.controller.js');


const rutas = Router();


rutas.get('/users', getUsers);
rutas.get('/users/:id', getUser);
rutas.post('/users/add', addUsers);
rutas.put('/users/upd/:id', updtingUsers);
rutas.delete('/users/delete/:id', deleteUsers);


module.exports = rutas;
