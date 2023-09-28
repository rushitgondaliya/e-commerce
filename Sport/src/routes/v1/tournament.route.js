const express = require("express");
const { tournamentValidation } = require("../../validations");
const { tournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create tournament */
router.post(
  "/create-tournament",
  validate(tournamentValidation.createTournament),
  tournamentController.createTournament
);

/** tournament list */
router.get("/list", tournamentController.getTournamentList);

router.put(
  "/update-tournament/:tournamentId",
  tournamentController.updateTournament
);

// /** Get user details by id */
router.get(
  "/get-details/:tournamentId",
  tournamentController.getTournamentById
);

router.delete("/delete/:tournamentId", tournamentController.deleteTournament);
module.exports = router;
