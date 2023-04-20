const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({

  id: { type: String, required: true }, // se definen los campos 
  name : {type:String},
  url:  {type:String}
});

// This Activitry creates the collection called activitimodels
const Charactermodel = mongoose.model("Charactermodel", characterSchema);

module.exports = Charactermodel;