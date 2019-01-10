const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3400;

server.use(express.json());

//GET

server.get('/api/zoos', (req, res) => {
    db('zoos').leftJoin('addresses', 'zoo_id', 'zoos.id')
        .then(zooInfo => {
            res.send(zooInfo)
        })
        .catch(err => console.log(err))
});

server.get('/api/animals', (req, res) => {
    db('animals').leftJoin('species', 'species_id', 'species.id')
        .then(animalInfo => {
            res.send(animalInfo)
        })
        .catch(err => console.log(err))
})

//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});