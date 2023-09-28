const express = require("express");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { playerValidation } = require("../../validations");
const { playerController } = require("../../controllers");
const auth =require("../../middlewares/auth")

const router = express.Router();

/** Create player */
router.post(
  "/create-player",
  upload.single("player_image"),
  auth(),
  validate(playerValidation.createPlayer),
  playerController.createPlayer
);

/** Get player details */
router.get("/details/:playerId", playerController.getPlayerList);

/** Get playerion list */
router.get("/list", playerController.getPlayerById);

/** Update player details */
router.put(
  "/update-details/:playerId",
  upload.single("player_image"),
  playerController.updatePlayer
);


/** Delete player */
router.delete("/delete/:playerId", playerController.deleteLeag);

module.exports = router;