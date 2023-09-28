const { sportService } = require("../services");

/** Create Sport controller */
const createSport = async (req, res) => {
  try {
    const reqBody = req.body;

    const sportExists = await sportService.createSport(reqBody);
    if (!sportExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Sport create successfully!",
      data: sportExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Sport list  controller */
const getSportList = async (req, res) => {
  try {
    const getlist = await sportService.getSportList();
    res.status(200).json({
      success: true,
      message: "Get sport successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Sport by Id controller */
const getSportById = async (req, res) => {
  try {
    const sportId = req.params.sportId;

    const sportExists = await sportService.getSportById(sportId);
    if (!sportExists) {
      throw new Error("Soprt not found!");
    }

    res.status(200).json({
      success: true,
      message: "Sport details get successfully!",
      data: sportExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Sport details update by Id controller */
const updateSport = async (req, res) => {
  try {
    const sportId = req.params.sportId;

    const sportExists = await sportService.getSportById(sportId);
    if (!sportExists) {
      throw new Error("Sport not found!");
    }

    sportService.updateSport(sportId, req.body);

    res.status(200).json({
      success: true,
      message: "Sport details update successfully!",
      data: sportExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Sport controller */
const deleteSport = async (req, res) => {
  try {
    const sportId = req.params.sportId;

    const sportExists = await sportService.getSportById(sportId);
    if (!sportExists) {
      throw new Error("Sport not found!");
    }

    sportService.deleteSport(sportId, req.body);

    res.status(200).json({
      success: true,
      message: "Sport details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createSport,
  getSportList,
  getSportById,
  updateSport,
  deleteSport,
};
