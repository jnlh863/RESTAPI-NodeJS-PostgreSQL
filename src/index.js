const express = require('express');
const app = express();
const {PUERTO} = require('./config.js');
const morgan = require('morgan');

const rutas = require('./routes/path.routing.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev')); 
app.use(rutas);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'ruta no existente'
    })
})


app.listen(PUERTO, () => {
    console.log(`Puerto ${PUERTO}`)
})