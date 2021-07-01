const { celebrate, Joi } = require('celebrate');

const registrationUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'string.required': 'Поле "name" должно быть заполнено',
      }),
    email: Joi.string().required().email()
      .messages({
        'string.required': 'Поле "email" должно быть заполнено',
        'string.email': 'Невалидный email',
      }),
    password: Joi.string().required().min(4)
      .messages({
        'string.required': 'Поле "password" должно быть заполнено',
        'string.min': 'Минимальная длина поля "password" - 4',
      }),
  }),
});

const loginUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .messages({
        'string.required': 'Поле "email" должно быть заполнено',
        'string.email': 'Невалидный email',
      }),
    password: Joi.string().required().min(4)
      .messages({
        'string.required': 'Поле "password" должно быть заполнено',
        'string.min': 'Минимальная длина поля "password" - 4',
      }),
  }),
});

const infoUserEdit = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .messages({
        'string.required': 'Поле "email" должно быть заполнено',
        'string.email': 'Невалидный email',
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'string.required': 'Поле "name" должно быть заполнено',
      }),
  }),
});

const newMoviecreate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({
        'string.required': 'Поле "country" должно быть заполнено',
      }),
    director: Joi.string().required()
      .messages({
        'string.required': 'Поле "director" должно быть заполнено',
      }),
    duration: Joi.number().required()
      .messages({
        'number.required': 'Поле "duration" должно быть заполнено',
      }),
    year: Joi.string().required()
      .messages({
        'string.required': 'Поле "year" должно быть заполнено',
      }),
    description: Joi.string().required()
      .messages({
        'string.required': 'Поле "description" должно быть заполнено',
      }),
    image: Joi.string().required().uri()
      .messages({
        'string.required': 'Поле "image" должно быть заполнено',
        'string.uri': 'Невалидный URL',
      }),
    trailer: Joi.string().required().uri()
      .messages({
        'string.required': 'Поле "trailer" должно быть заполнено',
        'string.uri': 'Невалидный URL',
      }),
    thumbnail: Joi.string().required().uri()
      .messages({
        'string.required': 'Поле "thumbnail" должно быть заполнено',
        'string.uri': 'Невалидный URL',
      }),
    movieId: Joi.number().required()
      .messages({
        'number.required': 'Поле "movieId" должно быть заполнено',
      }),
    nameRU: Joi.string().required()
      .messages({
        'string.required': 'Поле "nameRU" должно быть заполнено',
      }),
    nameEN: Joi.string().required()
      .messages({
        'string.required': 'Поле "nameEN" должно быть заполнено',
      }),
  }),
});

const movieDelete = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number(),
  }),
});

module.exports = {
  registrationUser,
  loginUser,
  infoUserEdit,
  newMoviecreate,
  movieDelete,
};
