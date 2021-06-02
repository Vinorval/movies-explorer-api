const router = require('express').Router();
const { getMyUser, updateProfil } = require('../controllers/user');

router.get('/users/me', getMyUser);
router.patch('/users/me', updateProfil);

module.exports = router;
