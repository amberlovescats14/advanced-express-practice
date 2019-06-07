const express = require("express");
const uuid = require('uuid')
const products = require('../../data/products')

const router = express.Router()

router.get('/', (req,res) => {
  res.json(products)
})

router.get('/:id', (req,res) => {
  const found = products.some(product => product._id === parseInt(req.params.id))

  if(found){
    res.json(products.filter(product => product._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

router.post('/', (req, res) => {
  const newProduct = {
    _id: uuid.v4(),
    name: req.body.name,
    description: req.body.description
  }

  if(!newProduct.name || !newProduct.description) {
   return res.status(400).json({msg: 'Please include name of product and description'})
  }

  products.push(newProduct);
  res.json(products)
})



module.exports = router 
