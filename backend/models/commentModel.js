const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    shelterId: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: [true, "Please add a text value"],
    },
    comment: {
      type: String,
      required: [true, "Please add a text value"],
    },
    
  },
  {
    timestamps: true,
    collection: "comment",
  }
);

module.exports = mongoose.model("Comment", commentSchema);
