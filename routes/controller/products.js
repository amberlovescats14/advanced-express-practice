const uuid = require('uuid')
const products = require('../../data/products')


const list = () => {
 return products
}

const show = (id) => {
  const found = products.some(product => product._id === parseInt(req.params.id))

  if(found){
    res.json(products.filter(product => product._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
}

const add = () => {
  const newProduct = {
    _id: uuid.v4(),
    name: req.body.name,
    description: req.body.description
  }

  if(!newProduct.name || !newProduct.description) {
   return res.status(400).json({msg: 'Please include name of product and description'})
  }

  products.push(newProduct);
  return products
}

module.exports = {
  list,
  show,
  add
}