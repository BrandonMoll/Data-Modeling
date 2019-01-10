
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoos', table => {
      //logic for our table
      table.increments();
      table.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('zoos')
};
