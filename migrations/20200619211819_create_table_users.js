const { table } = require("../src/core/database");
const tableName = "users";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string("fullName").notNull();
    table.string("email").notNull();
    table.unique("email");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
