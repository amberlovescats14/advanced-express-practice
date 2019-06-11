const express = require("express");
const comments = require('../controller/comments')
const router = express.Router()

router.get('/', (req, res) => {
  console.log("router", comments)
  res.json(comments.list())
})

router.get('/:id', (req,res) => {
  res.json(comments.show(params.body.id))
})

router.post('/', (req, res) => {
  res.json(comments.add(res.body))

})

module.exports = router