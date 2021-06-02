const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');
const { movieIdNotFound, errorDelete, } = require('../utils');

// GET
module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .populate('owner')
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

// POST
module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    owner: req.user._id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.status(200).send(movie))
    .catch(next);
};

// DELETE
module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(movieIdNotFound);
      }
      if (String(movie.owner) !== req.user._id) {
        throw new ForbiddenError(errorDelete);
      }
      return Movie.findByIdAndDelete(req.params.movieId)
        .then((userMovie) => res.status(200).send(userMovie));
    })
    .catch(next);
};
