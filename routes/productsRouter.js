const express = require("express");
const { list, show, add } = require('./controller/products')
const router = express.Router()

router.get('/', (req,res) => {
  res.json(products)
})

router.get('/:id', (req,res) => {
  res.json(products)
})

router.post('/', (req, res) => {
  res.json(products)
})



module.exports = router 
