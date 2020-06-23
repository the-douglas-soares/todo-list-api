const service = require("../../domain/user/service");
const jwt = require("../../domain/user/service/utils/jwt");
const errorHandler = require("./errorHandler");

module.exports = async function (req, res, next) {
  try {
    const { userId } = jwt.verify(req);
    const user = await service.getById(userId);
    if (!user) {
      throw { status: 401, message: "Token de autorização inválido" };
    }
    req.userId = userId;
    return next();
  } catch (e) {
    return errorHandler(res, e);
  }
};
