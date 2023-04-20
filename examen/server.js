

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://erikalls18:test123@clustertest.m16uhk0.mongodb.net/?retryWrites=true&w=majority";

console.log(uri)



//conneccion a la base de datos 
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });


app.use('/books', require("./routes/bookroute"));



app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});