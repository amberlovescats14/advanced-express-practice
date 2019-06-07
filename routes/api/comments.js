const express = require("express");
const uuid = require('uuid')
const comments = require('../../data/comments')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(comments)
})

router.get('/:id', (req,res) => {
  const found = comments.some(comment => comment._id === parseInt(req.params.id))

  if(found){
    res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: `No vehicle with the id ${req.params.id}`})
  }
})

router.post('/', (req, res) => {
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

module.exports = router