const { leaguesService } = require("../services");

/** Create Leagues controller */
const createLeag = async (req, res) => {
  try {
    const reqBody = req.body;

    const leagExists = await leaguesService.createLeag(reqBody);
    if (!leagExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Leagues create successfully!",
      data: leagExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Leagues list  controller */
const getLeagList = async (req, res) => {
  try {
    const getlist = await leaguesService.getLeagList();
    res.status(200).json({
      success: true,
      message: "Get leagues successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Leagues by Id controller */
const getLeagById = async (req, res) => {
  try {
    const leagId = req.params.leagId;

    const leagExists = await leaguesService.getEventById(leagId);
    if (!leagExists) {
      throw new Error("Leagues not found!");
    }

    res.status(200).json({
      success: true,
      message: "Leagues details get successfully!",
      data: leagExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Leagues details update by Id controller */
const updateLeag = async (req, res) => {
  try {
    const leagId = req.params.leagId;

    const leagExists = await leaguesService.getEventById(leagId);
    if (!leagExists) {
      throw new Error("Leagues not found!");
    }

    leaguesService.updateLeag(leagId, req.body);

    res.status(200).json({
      success: true,
      message: "Leagues details update successfully!",
      data: leagExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Leagues controller */
const deleteLeag = async (req, res) => {
  try {
    const leagId = req.params.leagId;

    const leagExists = await leaguesService.getEventById(leagId);
    if (!leagExists) {
      throw new Error("Leagues not found!");
    }

    leaguesService.deleteLeag(leagId, req.body);

    res.status(200).json({
      success: true,
      message: "Leagues details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createLeag,
  getLeagList,
  getLeagById,
  updateLeag,
  deleteLeag,
};
