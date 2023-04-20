const Character = require('../models/characterModel'); // constante que guarda el modelo de la base de datos
const router = require('express').Router();

router.route('/addnew').post(async (req, res) => {
    const id=req.body.id;
    const name = req.body.name;
    const url=req.body.url;

    // create a new Activity object
    const newCharacter1 = await new Character({
      id, name, url
    });
    // save the new object (newActivity)
    newCharacter1
      .save()
      .then(() => res.json('character added!'))
      .catch((err) => res.status(400).json('Error: ' + err))
      console.log("tetas");
    });
  


  module.exports = router;
