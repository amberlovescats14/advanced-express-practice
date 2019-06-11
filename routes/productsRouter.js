const express = require("express");
const products = require('../controller/products')
const router = express.Router()

router.get('/', (req,res) => {
  res.json(products.list())
})

router.get('/:id', (req,res) => {
  res.json(products.show(req.params.id))
})

router.post('/', products.add)



module.exports = router 
