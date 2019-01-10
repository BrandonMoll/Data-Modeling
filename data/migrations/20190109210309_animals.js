
exports.up = function(knex, Promise) {
    return knex.schema.createTable('animals', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('species_id').unsigned();
      table.foreign('species_id').references('id').on('species');
      table.integer('zoo_id').unsigned();
      table.foreign('zoo_id').references('id').on('zoos');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('animals');
  };
