const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const routeUsers = require('./user');
const routeMovies = require('./movie');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/user');
const NotFoundError = require('../errors/not-found-err');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);

router.use(auth);
router.use('/', routeUsers);
router.use('/', routeMovies);
router.use(() => { throw new NotFoundError('ресурс не найден'); });

module.exports = router;
