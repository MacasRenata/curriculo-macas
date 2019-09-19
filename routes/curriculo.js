const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const CurriculoController = require('../controllers/curriculo-controller');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/curriculo',(req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});