const { tournamentService } = require("../services");

/** Create Tournament controller */
const createTournament = async (req, res) => {
  try {
    const reqBody = req.body;

    const tournamentExists = await tournamentService.createTournament(reqBody);
    if (!tournamentExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Tournament create successfully!",
      data: tournamentExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get Tournament list  controller */
const getTournamentList = async (req, res) => {
  try {
    const getlist = await tournamentService.getTournamentList();
    res.status(200).json({
      success: true,
      message: "Get tournament successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Tournament by Id controller */
const getTournamentById = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;

    const tournamentExists = await tournamentService.getTournamentById(
      tournamentId
    );
    if (!tournamentExists) {
      throw new Error("Tournament not found!");
    }

    res.status(200).json({
      success: true,
      message: "Tournament details get successfully!",
      data: tournamentExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Tournament details update by Id controller */
const updateTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;

    const tournamentExists = await tournamentService.getTournamentById(
      tournamentId
    );
    if (!tournamentExists) {
      throw new Error("Tournament not found!");
    }

    tournamentService.updateTournament(tournamentId, req.body);

    res.status(200).json({
      success: true,
      message: "Tournament details update successfully!",
      data: tournamentExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete Tournament controller */
const deleteTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;

    const tournamentExists = await tournamentService.getTournamentById(
      tournamentId
    );
    if (!tournamentExists) {
      throw new Error("Tournament not found!");
    }

    tournamentService.deleteTournament(tournamentId, req.body);

    res.status(200).json({
      success: true,
      message: "Tournament details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createTournament,
  getTournamentList,
  getTournamentById,
  updateTournament,
  deleteTournament,
};
