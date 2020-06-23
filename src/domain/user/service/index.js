const repository = require("../repository");
const jwt = require("./utils/jwt");

exports.create = (user) => {
  return repository.create(user);
};

exports.getById = async (id) => {
  const user = await repository.getById(id);
  if(!user.id){
    throw { status: 404, message: "Usuário não encontrado" };
  }
  return repository.getById(id);
};

exports.login = async (email) => {
  const user = await repository.getByEmail(email);
  if (!user.id) {
    throw { status: 401, message: "Usuário inválido" };
  }
  const token = jwt.generateToken(user);
  return {
    user,
    token,
  };
};
