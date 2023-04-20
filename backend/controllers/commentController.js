
// use err handler instead of try catches for async

const asyncHandler = require("express-async-handler");
const Facility = require("../models/facilityModel");
const Comment = require("../models/commentModel");
//agregar try/catch 
const getComment= asyncHandler(async (req, res) => {
  const comment = await Comment.find();
  res.status(200).json(comment);
});

const getComments = asyncHandler(async (req, res) => {
  const shelterId=req.params.id
  const comment = await Comment.find({shelterId:shelterId})
  .catch((err) => res.status(400).json('Error: ' + err));
 
  res.status(201).json(comment);
});


const setComment = asyncHandler(async (req, res) => {

  if (!req.body.user) {
    res.status(400);
    throw new Error("Please enter your name");
  }

  if (!req.body.comment) {
    res.status(400);
    throw new Error("Please enter your comment");
  }    
  shelterId=req.body.shelterId,
  user=req.body.user,
  comment=req.body.comment

  const newComment = await Comment.create({
  shelterId,user,comment
    
  });

  console.log(newComment);
  newComment
  .save()
  .then(() => res.status(201).json('Activity added!'))
  .catch((err) => res.status(400).json('Error: ' + err));

});



module.exports = {
  getComment,
  setComment,
  getComments
};
