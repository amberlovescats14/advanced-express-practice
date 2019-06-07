const express = require("express");
const contacts = require('./controller/contacts')
const router = express.Router()

router.get('/', (req,res) => {
  res.json(contacts)
})
router.get('/:id', (req,res) => {
  res.json(contacts)
})

router.post('/', (req, res) => {
  res.json(contacts)
})

module.exports = router