const express = require("express");
const { teamValidation } = require("../../validations");
const { teamController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create team */
router.post(
  "/create-team",
  validate(teamValidation.createTeam),
  teamController.createTeam
);

/** team list */
router.get("/list", teamController.getTeamList);

router.put("/update-team/:teamId", teamController.updateTeam);

// /** Get team details by id */
router.get("/get-details/:teamId", teamController.getTeamById);


router.delete("/delete/:teamId", teamController.deleteTeam);
module.exports = router;
