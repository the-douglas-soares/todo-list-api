const knex = require("../../../core/database");
const tableName = "tasks";
const Task = require("../task");
const { update } = require("../../../core/database");

exports.getAll = async (userId) => {
  return knex(tableName).where({ user_id: userId });
};

exports.create = async (task) => {
  const [inserted] = await knex(tableName).insert(task).returning("*");
  return new Task(inserted);
};

exports.getById = async (id) => {
  const [task] = await knex(tableName).where({ id });
  return new Task(task);
};

exports.update = async (id, task) => {
  const [updated] = await knex(tableName)
    .where({ id })
    .update(task)
    .returning("*");
  return new Task(updated);
};

exports.del = (id) => {
  return knex(tableName).where({ id }).del();
};
