const express = require("express");
const { sportValidation } = require("../../validations");
const { sportController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create sport */
router.post(
  "/create-sport",
  validate(sportValidation.createSport),
  sportController.createSport
);

/** sport list */
router.get("/list", sportController.getSportList);

router.put("/update-sport/:sportId", sportController.updateSport);

// /** Get user details by id */
router.get("/get-details/:sportId", sportController.getSportById);


router.delete("/delete/:sportId", sportController.deleteSport);
module.exports = router;
