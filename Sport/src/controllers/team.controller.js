const { teamService } = require("../services");

/** Create Team controller */
const createTeam = async (req, res) => {
  try {
    const reqBody = req.body;

    const teamExists = await teamService.createTeam(reqBody);
    if (!teamExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Team create successfully!",
      data: teamExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Team list  controller */
const getTeamList = async (req, res) => {
  try {
    const getlist = await teamService.getTeamList();
    res.status(200).json({
      success: true,
      message: "Get team successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Team by Id controller */
const getTeamById = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("Team not found!");
    }

    res.status(200).json({
      success: true,
      message: "Team details get successfully!",
      data: teamExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Team details update by Id controller */
const updateTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("Team not found!");
    }

    teamService.updateTeam(teamId, req.body);

    res.status(200).json({
      success: true,
      message: "Team details update successfully!",
      data: teamExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Team controller */
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("Team not found!");
    }

    teamService.deleteTeam(teamId, req.body);

    res.status(200).json({
      success: true,
      message: "Team details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  updateTeam,
  deleteTeam,
};
