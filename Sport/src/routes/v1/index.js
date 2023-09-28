const express=require("express")
const userRoute=require("./user.route");
const coachRoute=require("./coach.route");
const eventRoute=require("./event.route");
const leaguesRoute=require("./leagues.route");
const playerRoute =require("./player.route");
const teamRouter = require("./team.route");
const sportRouter = require("./sport.route");
const tournamentRouter = require("./tournament.route");
const tokenRoute=require("./token.route");

const router =express.Router();

router.use("/user",userRoute);
router.use("/coach", coachRoute);
router.use("/event", eventRoute);
router.use("/leagues", leaguesRoute);
router.use("/player", playerRoute);
router.use("/team", teamRouter);
router.use("/sport", sportRouter);
router.use("/tournament", tournamentRouter);
router.use("/token", tokenRoute);

module.exports=router;