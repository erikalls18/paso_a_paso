const express = require("express");
const router = express.Router();
const {
  getFacility,
  getFacilityId,
  setFacility,
  updateFacility,
  deleteFacility,
} = require("../controllers/facilityController");

router.route("/").get(getFacility).post(setFacility);

router
  .route("/:id")
  .get(getFacilityId)
  .put(updateFacility)
  .delete(deleteFacility);

module.exports = router;
