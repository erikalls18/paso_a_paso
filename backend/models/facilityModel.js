const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema(
  {
    facility: {
      type: String,
      // required: [true, "Please add a text value"],
    },
    category: {
      type: String,
      // required: [true, "Please add a text value"],
    },
    phone: {
      type: String,
      // required: [true, "Please add a phone number ###-###-####"],
    },
    meals: {
      type: String,
      // required: [true, "Please add a boolean (yes/no)"],
    },
    pets: {
      type: String,
      // required: [true, "Please add a boolean (yes/no)"],
    },
    carts: {
      type: String,
      // required: [true, "Please add a boolean (yes/no)"],
    },
    geo_local_area: {
      type: String,
      // required: [true, "Please specify geo local area"],
    },
    geo_point_2d: {
      lon: {
        type: Number,
        // required: [true, "Please specify Lon point"],
      },
      lat: {
        type: Number,
        // required: [true, "Please specify Lat point"],
      },
    },
  },
  {
    timestamps: true,
    collection: "facility",
  }
);

module.exports = mongoose.model("Facility", facilitySchema);
