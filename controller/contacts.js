const uuid = require('uuid')
const contacts = require('../data/comments')


const list = () => {
  return contacts
}

const show = (id) => {
  const found = contacts.some(contact => contact._id === parseInt(id))

  if(found){
    return contacts.filter(contact => contact._id === parseInt(id))
  } else {
    return {msg: `ID not found`}
  }
}

const add = () => {
  const newContact = {
    _id: uuid.v4(),
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }

  if(!newContact.name) {
   return {msg: 'Please include name, occupation and avatar'}
  } else {
    
    contacts.push(newContact);
    return contacts
  }

}

module.exports = {
  list,
  show,
  add
}