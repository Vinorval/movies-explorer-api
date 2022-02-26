const router = require('express').Router();
const routeUsers = require('./user');
const routeMovies = require('./movie');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/user');
const NotFoundError = require('../errors/not-found-err');
const { errorNotFound } = require('../utils');
const { registrationUser, loginUser } = require('../middlewares/validation');

router.post('/signin', loginUser, login);
router.post('/signup', registrationUser, createUser);

router.use(auth);
router.use('/', routeUsers);
router.use('/', routeMovies);
router.use(() => { throw new NotFoundError(errorNotFound); });

module.exports = router;
