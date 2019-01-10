const knex = require('knex');

const db_config = require('./knexfile');

const db = knex(db_config.development);

module.exports.getDishes = function(){
    //db logic without res and req, just getting dishes
};


    module.exports.getDishes().then(result => {
        console.log('result', result)
    })