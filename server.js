//Import
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

//Config
app.use(express.json());
app.use('/', routes);
app.use(express.static('public'));

//Server
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});