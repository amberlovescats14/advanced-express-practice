const uuid = require('uuid')
const comments = require('../data/comments')


const list = () => {
  return comments
}

const show = (id) => {
  const found = comments.some(comment => comment._id === parseInt(id))

  if(found){
    res.json(comments.filter(comment => comment._id === parseInt(id)))
  } else {
    return {msg: `ID not found`}
  }


}

const add = (newComment) => {
  // console.log("ADDING", e)
  // const newComment = {
  //   _id: uuid.v4(),
  //   body: e.target.value
  // }
  console.log(newComment)
  if(!newComment) {
   return {msg: 'Please enter comment.'}
  } else {

    comments.push(newComment);
    return comments
  }

}

module.exports = {
  list,
  show,
  add
}