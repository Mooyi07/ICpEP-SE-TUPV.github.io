
const express = require('express')
const asyncWrap = require('../utils/async-wrap')
const router = express.Router()

router.get('/', asyncWrap(async (req, res) => {
  res.json({
    success: true,
    message: 'No errors.'
  })
}))

module.exports = router
