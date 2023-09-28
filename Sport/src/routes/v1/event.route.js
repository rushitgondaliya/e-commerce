const express = require("express");
const { eventValidation } = require("../../validations");
const { eventController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create event */
router.post(
  "/create-event",
  validate(eventValidation.createEvent),
  eventController.createEvent
);

/** event list */
router.get("/list", eventController.getEventList);
/** Get event details by id */
router.get("/get-details/:eventId", eventController.getEventById);

//event update
router.put("/update-details/:eventId", eventController.updateEvent);

//event delete
router.delete("/delete-event/:eventId", eventController.deleteEvent);

module.exports = router;