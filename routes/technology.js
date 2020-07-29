const express = require('express');

const router = express.Router();


router.get('/', function(req, res) {
    res.send('Primera ruta con technology.js')
})


router.get('/phone', function(req, res) {
    res.send('SEGUNDA ruta con technology.js')
})

module.exports = router;