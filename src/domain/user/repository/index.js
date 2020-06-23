const knex = require("../../../core/database");
const tableName = "users";
const User = require("../user");

exports.create = async (user) => {
  const [inserted] = await knex(tableName).insert(user).returning("*");
  return new User(inserted);
};

exports.getById = async (id) => {
  const [user] = await knex(tableName).where({ id });
  return new User(user);
};

exports.getByEmail = async (email) => {
  const [user] = await knex(tableName).where({ email });
  return new User(user);
};
