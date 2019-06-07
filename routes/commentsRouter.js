const express = require("express");
const comments = require('./controller/comments')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(comments)
})

router.get('/:id', (req,res) => {
  res.json(comments)
})

router.post('/', (req, res) => {
  res.json(comments)

})

module.exports = router