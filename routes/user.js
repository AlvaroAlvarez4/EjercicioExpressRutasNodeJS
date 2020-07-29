const express = require('express');

const router = express.Router();


router.get('/', function(req, res) {
    res.send('Primera ruta con user.js')
})


router.get('/home', function(req, res) {
    res.send('SEGUNDA ruta con user.js')
})

module.exports = router;