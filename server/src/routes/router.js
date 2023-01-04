const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

//API endpoints

router.post('/login', require('./loginRoute'));

router.get('/todos', isLoggedIn, require('./readTodosRoute'));
router.post('/todos', isLoggedIn, require('./createTodoRoute'));

module.exports = router;
