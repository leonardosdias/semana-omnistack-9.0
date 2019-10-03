const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes')

const app = express();

//req.query - Acessa os parâmetros da requisição - (para filtros)
//req.params - Usado para edição e exclusao - route params
//req.body - Usado para obter o corpo da requisição

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-3sfm5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);