const Knex = require("knex");

const tableName = "tasks";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string("description").notNull();
    table.boolean("completed").notNull().defaultsTo(false);
    table.integer("user_id").references("users.id");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema
    .table(tableName, (table) => {
      table.dropForeign("user_id");
    })
    .then(() => knex.schema.dropTable(tableName));
};
