const express = require("express");
const uuid = require('uuid')
const contacts = require('./data/contacts')
const vehicles = require('./data/vehicles')
const comments = require('./data/comments')
const products = require('./data/products')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//! CONTACTS
app.get('/contacts', (req,res) => {
  res.json(contacts)
})
app.get('/contacts/:id', (req,res) => {
  const found = contacts.some(contact => contact._id === parseInt(req.params.id))

  if(found){
    res.json(contacts.filter(contact => contact._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No contact with the id ${req.params.id}`})
  }
})

app.post('/contacts', (req, res) => {
  const newContact = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newContact.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  contacts.push(newContact);
  res.json(contacts)
})
//! VEHICLES

app.get('/vehicles', (req, res) => {
  res.json(vehicles)
})
app.get('/vehicles/:id', (req,res) => {
  const found = vehicles.some(vehicle => vehicle._id === parseInt(req.params.id))

  if(found){
    res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

app.post('/vehicles', (req, res) => {
  const newVehicle = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newVehicle.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  vehicles.push(newVehicle);
  res.json(vehicles)
})

//!COMMENTS
app.get('/comments', (req, res) => {
  res.json(comments)
})

app.get('/comments/:id', (req,res) => {
  const found = comments.some(comment => comment._id === parseInt(req.params.id))

  if(found){
    res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

app.post('/comments', (req, res) => {
  const newComment = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newComment.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  comments.push(newComment);
  res.json(comments)
})

//!PRODUCTS

app.get('/products', (req,res) => {
  res.json(products)
})

app.get('/products/:id', (req,res) => {
  const found = products.some(product => product._id === parseInt(req.params.id))

  if(found){
    res.json(products.filter(product => product._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

app.post('/products', (req, res) => {
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




const path = require('path')

const port = process.env.PORT || 4001;



app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
