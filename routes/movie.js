const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');
const { newMoviecreate, movieDelete } = require('../middlewares/validation');

router.get('/movies', getMovies);
router.post('/movies', newMoviecreate, createMovie);
router.delete('/movies/:movieId', movieDelete, deleteMovie);

module.exports = router;
