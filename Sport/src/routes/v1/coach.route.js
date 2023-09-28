const express =require("express");
const {coachValidation}=require("../../validations");
const {coachController}=require("../../controllers");
const validate =require("../../middlewares/validate")

const router=express.Router();

router.post(
  "/create-coach",
  validate(coachValidation.createCoach),
  coachController.createCoach
);

router.get("/list", coachController.getCoachList);

router.get("/get-details/:coachId", coachController.getCoachById);

  router.put("/update-details/:coachId", coachController.updateCoach);

router.delete("/delete-coach/:coachId", coachController.deleteCoach);

module.exports=router;