const express = require("express");
const uuid = require('uuid')
const contacts = require('../../data/contacts')

const router = express.Router()

router.get('/', (req,res) => {
  res.json(contacts)
})
router.get('/:id', (req,res) => {
  const found = contacts.some(contact => contact._id === parseInt(req.params.id))

  if(found){
    res.json(contacts.filter(contact => contact._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No contact with the id ${req.params.id}`})
  }
})

router.post('/', (req, res) => {
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

module.exports = router