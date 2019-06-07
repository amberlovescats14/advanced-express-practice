const uuid = require('uuid')
const contacts = require('../../data/contacts')


const list = () => {
  return contacts
}
const show = (id) => {
  const found = contacts.some(contact => contact._id === parseInt(req.params.id))

  if(found){
    res.json(contacts.filter(contact => contact._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No contact with the id ${req.params.id}`})
  }
}

const add = () => {
  const newContact = {
    _id: uuid.v4(),
    name: req.body.name
  }

  if(!newContact.name ) {
   return res.status(400).json({msg: 'Please include name.'})
  }

  contacts.push(newContact);
  return contacts
}

module.export = {
  list,
  show,
  add
}