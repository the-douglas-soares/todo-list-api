const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
exports.generateToken = ({ id }) => {
  const token = jwt.sign({ userId: id }, secret);
  return token;
};

exports.verify = (req) => {
  const header = req.headers.authorization;
  if (!header) {
    throw { status: 401, message: "Token de autorização não enviado" };
  }
  const token = header.split(" ")[1];
  if (!token) {
    throw { status: 401, message: "Token de autorização inválido" };
  }
  const decoded = jwt.verify(token, secret);
  return decoded;
};
