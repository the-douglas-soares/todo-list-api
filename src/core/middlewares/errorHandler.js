module.exports = (res, error) => {
  const status = error.status || 500;
  const errorJson = error.status
    ? error
    : { status: 500, message: error.message };
  console.log("Erro", status, errorJson);
  return res.status(status).json(errorJson);
};
