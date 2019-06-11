const express = require("express");
const contacts = require('../controller/contacts')
const router = express.Router()

router.get('/', (req,res) => {
  res.json(contacts.list())
})
router.get('/:id', (req,res) => {
  res.json(contacts.show(req.body.id))
})

router.post('/', (req, res) => {
  res.json(contacts.add())
})

module.exports = router