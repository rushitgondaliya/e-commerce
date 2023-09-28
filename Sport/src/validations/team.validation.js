const Joi = require("joi");

/** Create Team Validation */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().trim().required(),
    members: Joi.number().integer().required(),
    player: Joi.string().trim().required(),
    sport_type: Joi.string().trim().required(),
  }),
};

module.exports = {
  createTeam,
};
