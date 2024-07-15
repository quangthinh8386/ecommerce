'use strict'

const express = require('express');
const { ModifiedPathsSnapshot } = require('mongoose');
const AccessController = require('../../controllers/access.controller');
const router = express.Router()

// signUp
router.post('/shop/signup', AccessController.signUp)

module.exports = router