const service = require("../service");
const User = require("../user");
const errorHandler = require("../../../core/middlewares/errorHandler");

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function create(req, res) {
  try {
    const user = new User(req.body);
    if (!validateEmail(user.email)) {
      throw { status: 400, message: `Email Inválido ${user.email}` };
    }
    const created = await service.create(user);
    res.status(201).json(created);
  } catch (e) {
    return errorHandler(res, e);
  }
}

async function login(req, res) {
  try {
    const { email } = req.body;
    if (!validateEmail(email)) {
      throw { status: 400, message: `Email Inválido ${user.email}` };
    }
    const loginResult = await service.login(email);
    res.status(200).json(loginResult);
  } catch (e) {
    return errorHandler(res, e);
  }
}

module.exports = {
  create,
  login,
};
