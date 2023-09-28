const express = require("express");
const {leaguesValidation}=require("../../validations");
const {leaguesController}=require("../../controllers");
const validate=require("../../middlewares/validate");

const router=express.Router();

router.post(
  "/create-leagues",
  validate(leaguesValidation.createLeag),
  leaguesController.createLeag
);

router.get("/list", leaguesController.getLeagList);

router.get("/get-details/:leaguesId", leaguesController.getLeagById);

  router.put("/update-details/:leaguesId", leaguesController.updateLeag);

router.delete("/delete-leagues/:leaguesId", leaguesController.deleteLeag);

module.exports=router;