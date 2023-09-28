const { playerService } = require("../services");

/** Create Player controller */
const createPlayer = async (req, res) => {
  try {
    const reqBody = req.body;

    const playerExists = await playerService.createPlayer(reqBody);
    if (!playerExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Player create successfully!",
      data: playerExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Player list  controller */
const getPlayerList = async (req, res) => {
  try {
    const getlist = await playerService.getPlayerList();
    res.status(200).json({
      success: true,
      message: "Get player successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Player by Id controller */
const getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.playerId;

    const playerExists = await playerService.getPlayerById(playerId);
    if (!playerExists) {
      throw new Error("Player not found!");
    }

    res.status(200).json({
      success: true,
      message: "Player details get successfully!",
      data: playerExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Player details update by Id controller */
const updatePlayer = async (req, res) => {
  try {
    const playerId = req.params.playerId;

    const playerExists = await playerService.getPlayerById(playerId);
    if (!playerExists) {
      throw new Error("Player not found!");
    }

    playerService.updatePlayer(playerId, req.body);

    res.status(200).json({
      success: true,
      message: "Player details update successfully!",
      data: playerExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Player controller */
const deleteLeag = async (req, res) => {
  try {
    const playerId = req.params.playerId;

    const playerExists = await playerService.getPlayerById(playerId);
    if (!playerExists) {
      throw new Error("Player not found!");
    }

    playerService.deletePlayer(playerId, req.body);

    res.status(200).json({
      success: true,
      message: "Player details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createPlayer,
  getPlayerList,
  getPlayerById,
  updatePlayer,
  deleteLeag,
};
