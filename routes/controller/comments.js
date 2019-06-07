const uuid = require('uuid')
const comments = require('../../data/comments')


const list = () => {
  return comments
}

const show = (id) => {
  const found = comments.some(comment => comment._id === parseInt(req.params.id))

  if(found){
    res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }


}

const add = () => {
  const newComment = {
    _id: uuid.v4(),
    body: req.body.body
  }

  if(!newComment.body ) {
   return res.status(400).json({msg: 'Please enter comment.'})
  }

  comments.push(newComment);
  return comments
}

module.exports = {
  list,
  show,
  add
}