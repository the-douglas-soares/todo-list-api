const repository = require("../repository");
const Task = require("../task");

exports.getAll = (userId) => {
  return repository.getAll(userId);
};

exports.create = (userId, task) => {
  return repository.create(
    new Task({
      ...task,
      user_id: userId,
    })
  );
};

exports.update = async (userId, id, { description, updated_at, completed }) => {
  const task = await repository.getById(id);
  if (!task.id) {
    throw { status: 404, message: "Tarefa não encontrada" };
  }
  if (userId !== task.user_id) {
    throw { status: 403, message: "Essa Tarefa não pertence a esse usuário" };
  }

  return repository.update(
    id,
    new Task({
      ...task,
      description,
      completed,
      updated_at,
    })
  );
};

exports.del = async (userId, id) => {
  const task = await repository.getById(id);
  if (!task.id) {
    throw { status: 404, message: "Tarefa não encontrada" };
  }
  if (userId !== task.user_id) {
    throw { status: 403, message: "Essa Tarefa não pertence a esse usuário" };
  }

  return repository.del(id);
};
