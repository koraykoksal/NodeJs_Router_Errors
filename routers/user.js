"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// const express = require("express");
// const router = express.Router()

const router = require("express").Router()

router.get('/', (req, res) => { res.send({ message: 'All User' }) })
router.get('/login', (req, res) => { res.send({ message: 'Login' }) })
router.get('/logout', (req, res) => { res.send({ message: 'Logout' }) })
router.get('/:userId', (req, res) => { res.send({ message: 'User Page' }) })
router.get('/:userId/password', (req, res) => { res.send({ message: 'Password Page' }) })

module.exports = router
