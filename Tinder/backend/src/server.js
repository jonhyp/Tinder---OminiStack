const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-c0jvs.mongodb.net/oministack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);