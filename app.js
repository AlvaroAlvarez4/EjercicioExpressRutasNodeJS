const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

let indexRouter = require('./routes/index.js');
let cityRouter = require('./routes/city.js');
let technologyRouter = require('./routes/technology.js');
let userRouter = require('./routes/user.js');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', indexRouter);
app.use('/city', cityRouter);
app.use('/tenhnology', technologyRouter);
app.use('/user', userRouter);


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});