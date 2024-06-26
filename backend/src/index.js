const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
require('dotenv/config');
require('./config/dbConfig');

app.use(cors)
app.use(express.json());

// Rotas
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})