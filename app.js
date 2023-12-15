const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('layout', { view: 'home' });
});

app.get('/divisa', (req, res) => {
    res.render('layout', { view: 'divisa' });
});

app.get('/ingresos', (req, res) => {
    res.render('layout', { view: 'ingresos' });
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
