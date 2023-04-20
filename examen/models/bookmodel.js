const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String  }, // se definen los campos 
  author: { type: String },
  description: { type: String },
});

// This Activitry creates the collection called activitimodels
const BookList = mongoose.model("300362257Liceth", bookSchema);

module.exports = BookList;