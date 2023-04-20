const Book = require('../models/bookmodel'); // constante que guarda el modelo de la base de datos
const router = require('express').Router();


//GET
router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//POST
router.route('/add').post(async (req, res) => {
  title = req.body.title;
  author= req.body.author;
   description = req.body.description;
  console.log(req.body)
  const newBook =  await Book.create({
  title, author, description
      

///const newBook = await new Book({
    //title, author, description
  });
  console.log(req.body)
  newBook
    .save()
    .then(() => res.json(newBook))
    .catch((err) => res.status(400).json('Error: ' + err));
    console.log(newBook)
  });


router.route('/:id').get(async (req, res)=>{
  const bookId=req.params.id
  const book = await Book.find({_id: bookId}) 
  res.status(201).json(book);

    
});

// UPDATE

router.route('/update/:id').post(async(req,res)=>{
  
  const bookId=req.params.id
  const bookUpdated ={ 
     author: req.body. author,
     description: req.body.description
  }
  await Book.findOneAndUpdate({_id: bookId}, bookUpdated) 
    .then(() => res.json(bookUpdated))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//DELETE
router.route('/delete/:id').delete(async(req,res)=>{
  const bookId=req.params.id;
  console.log(bookId)
  await Book.findByIdAndDelete({ _id: bookId })
    .then(() => res.json('Book deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));

});






module.exports = router;
