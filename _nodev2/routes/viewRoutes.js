const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

//router.use(authController.isLoggedIn);
router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/register',  viewsController.getSignupForm);

router.get('/habit/:id', authController.isLoggedIn,viewsController.getHabit);

 
/*

 */

module.exports = router;
