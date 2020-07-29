const express = require('express');

const router = express.Router();


router.get('/', function(req, res) {
    res.send('Primera ruta con index.js')
})


router.get('/home', function(req, res) {
    res.send('SEGUNDA ruta con index.js')
})

module.exports = router;