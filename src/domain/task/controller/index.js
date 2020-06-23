const service = require("../service");
const Task = require("../task");
const errorHandler = require("../../../core/middlewares/errorHandler");

async function getAll(req, res) {
  try {
    const tasks = await service.getAll(req.userId);
    res.status(200).json(tasks);
  } catch (e) {
    return errorHandler(res, e);
  }
}

async function create(req, res) {
  try {
    const task = new Task(req.body);
    if (!task.description) {
      throw { status: 400, message: "Descrição Inválida" };
    }
    const created = await service.create(req.userId, task);
    res.status(201).json(created);
  } catch (e) {
    return errorHandler(res, e);
  }
}

async function update(req, res) {
  try {
    const task = new Task(req.body);
    if (!task.description) {
      throw { status: 400, message: "Descrição Inválida" };
    }
    const updated = await service.update(req.userId, req.params.id, task);
    res.status(200).json(updated);
  } catch (e) {
    return errorHandler(res, e);
  }
}

async function del(req, res) {
  try {
    await service.del(req.userId, req.params.id);
    res.status(204).end();
  } catch (e) {
    return errorHandler(res, e);
  }
}

module.exports = {
  getAll,
  create,
  update,
  del,
};
