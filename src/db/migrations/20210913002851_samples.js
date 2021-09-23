
exports.up = function(knex) {
  return knex.schema.createTable("samples", (table)=> {
      table.increments("id").primary()
      table.string("sample_name").notNullable()
      table.integer("sample_age").notNullable()
      table.timestamps(true, true)
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable("samples")
};
