const { eventService } = require("../services");

/** Create Event controller */
const createEvent = async (req, res) => {
  try {
    const reqBody = req.body;

    const eventExists = await eventService.createEvent(reqBody);
    if (!eventExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Event create successfully!",
      data: eventExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Event list  controller */
const getEventList = async (req, res) => {
  try {
    const getlist = await eventService.getEventList();
    res.status(200).json({
      success: true,
      message: "Get event successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Event by Id controller */
const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const eventExists = await eventService.getEventById(eventId);
    if (!eventExists) {
      throw new Error("Event not found!");
    }

    res.status(200).json({
      success: true,
      message: "Event details get successfully!",
      data: eventExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Event details update by Id controller */
const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const eventExists = await eventService.getEventById(eventId);
    if (!eventExists) {
      throw new Error("Event not found!");
    }

    eventService.updateEvent(eventId, req.body);

    res.status(200).json({
      success: true,
      message: "Event details update successfully!",
      data: eventExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Event controller */
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const eventExists = await eventService.getEventById(eventId);
    if (!eventExists) {
      throw new Error("Event not found!");
    }

    eventService.deleteEvent(eventId, req.body);

    res.status(200).json({
      success: true,
      message: "Event details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createEvent,
  getEventList,
  getEventById,
  updateEvent,
  deleteEvent,
};
