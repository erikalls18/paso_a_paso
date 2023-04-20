const express = require("express");
const router = express.Router();
const {
    getComment,
    getComments,
    setComment
  
} = require("../controllers/commentController");

router.route("/").get(getComment)
router.route("/").post(setComment);

router.route("/:id").get(getComments);



module.exports = router;