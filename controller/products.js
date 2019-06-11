const uuid = require('uuid')
const products = require('../data/products')


const list = () => {
  return products
}

const show = (id) => {
  const found = products.some(product => product._id === parseInt(id))

  if (found) {
    return products.filter(product => product._id === parseInt(id))
  } else {
    return {
      msg: "ID not found"
    }
  }
}

const add = (req, res) => {
  const newProduct = {
    _id: uuid.v4(),
    name: req.body.name,
    description: req.body.description
  }

  if (!newProduct.name || !newProduct.description) {
    return res.status(400).json({
      msg: 'Please include name of product and description'
    })
  } else {

    products.push(newProduct);
    return res.json(products)
  }

}

module.exports = {
  list,
  show,
  add
}