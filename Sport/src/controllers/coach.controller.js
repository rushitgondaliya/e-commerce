const { coachService } = require("../services");

/** Create Coach controller */
const createCoach = async (req, res) => {
  try {
    const reqBody = req.body;

    const coachExists = await coachService.createCoach(reqBody);
    if (!coachExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Coach create successfully!",
      data: coachExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Coach list  controller */
const getCoachList = async (req, res) => {
  try {
    const getlist = await coachService.getCoachList();
    res.status(200).json({
      success: true,
      message: "Get coach successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Coach by Id controller */
const getCoachById = async (req, res) => {
  try {
    const coachId = req.params.coachId;

    const coachExists = await coachService.getCoachById(coachId);
    if (!coachExists) {
      throw new Error("Coach not found!");
    }

    res.status(200).json({
      success: true,
      message: "Coach details get successfully!",
      data: coachExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Coach details update by Id controller */
const updateCoach = async (req, res) => {
  try {
    const coachId = req.params.coachId;

    const coachExists = await coachService.getCoachById(coachId);
    if (!coachExists) {
      throw new Error("Coach not found!");
    }

    coachService.updateCoach(coachId, req.body);

    res.status(200).json({
      success: true,
      message: "Coach details update successfully!",
      data: coachExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Coach controller */
const deleteCoach = async (req, res) => {
  try {
    const coachId = req.params.coachId;

    const coachExists = await coachService.getCoachById(coachId);
    if (!coachExists) {
      throw new Error("Coach not found!");
    }

    coachService.deleteCoach(coachId, req.body);

    res.status(200).json({
      success: true,
      message: "Coach details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createCoach,
  getCoachList,
  getCoachById,
  updateCoach,
  deleteCoach,
};
