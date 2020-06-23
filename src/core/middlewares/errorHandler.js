module.exports = (res, error) => {
  return res
    .status(error.status || 500)
    .json(error.status ? error : { status: 500, message: error.message });
};
