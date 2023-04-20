// use err handler instead of try catches for async
const asyncHandler = require("express-async-handler");
const Facility = require("../models/facilityModel");
const Comment = require("../models/commentModel");

// @desc    Get all facility
// @route   GET /api/facility
// @access  Public
const getFacility = asyncHandler(async (req, res) => {
  const facility = await Facility.find({});
  res.status(200).json(facility);
});

// @desc    Get by facility id
// @route   GET /api/facility/:id
// @access  Public
const getFacilityId = asyncHandler(async (req, res) => {
  const facility = await Facility.findById(req.params.id);
  if (!facility) {
    res.status(400);
    throw new Error("Facility not found");
  }
  res.status(200).json(facility);
});

// @desc    Set facility
// @route   POST /api/facility
// @access  Public
const setFacility = asyncHandler(async (req, res) => {
  if (!req.body.facility) {
    res.status(400);
    throw new Error("Please add a facility field");
  }

  const facility = await Facility.create({
    facility: req.body.facility,
    category: req.body.category,
    phone: req.body.phone,
    meals: req.body.meals,
    pets: req.body.pets,
    carts: req.body.carts,
    geo_local_area: req.body.geo_local_area,
    geo_point_2d: req.body.geo_point_2d,
  });
  res.status(200).json(facility);
});

// @desc    Update facility
// @route   PUT /api/facility/:id
// @access  Public
const updateFacility = asyncHandler(async (req, res) => {
  const facility = await Facility.findById(req.params.id);
  if (!facility) {
    res.status(400);
    throw new Error("Facility not found");
  }
  // Authentication TBC
  console.log(req.body);
  const updatedFacility = await Facility.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body, updatedAt: new Date() } },
    // req.body,
    {
      new: true, // return the modified document
      upsert: true, // create new document if none matches
    }
  );
  res.status(200).json(updatedFacility);
});

// @desc    Delete facility (WIP)
// @route   DELETE /api/facility/:id
// @access  Private (TBC)
const deleteFacility = asyncHandler(async (req, res) => {
  const facility = await Facility.findByIdAndDelete(req.params.id);
  if (!facility) {
    res.status(400);
    throw new Error("Facility not found");
  }

  res.status(200).json({ DeletedFacilityId: req.params.id });
});

module.exports = {
  getFacility,
  getFacilityId,
  setFacility,
  updateFacility,
  deleteFacility,
};
