module.exports = (err, req, res, next) => {
  if (err.name === 'CastError' || err.name === 'ValidationError' || err.statusCode === 400) {
    res
      .status(400)
      .send({
        message: 'Переданы некорректные данные',
      });
  } if (err.name === null) { next(); }

  const { statusCode = 500, message } = err;
  return res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
};
