const router = require('express').Router();
const { getMyUser, updateProfil } = require('../controllers/user');
const { infoUserEdit } = require('../middlewares/validation');

router.get('/users/me', getMyUser);
router.patch('/users/me', infoUserEdit, updateProfil);

module.exports = router;
