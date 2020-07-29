const express = require('express');

const router = express.Router();


router.get('/', function(req, res) {
    res.send('Primera ruta con city.js')
})


router.get('/Malaga', function(req, res) {
    res.send('SEGUNDA ruta con city.js')
})

module.exports = router;