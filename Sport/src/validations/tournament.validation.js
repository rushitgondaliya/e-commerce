const Joi = require("joi");

/** Create Tournament Validation */
const createTournament = {
  body: Joi.object().keys({
    tournament_name: Joi.string().trim().required(),
    tournament_date: Joi.date().required(),
    orgainzation: Joi.string().trim().required(),
    team: Joi.string().trim().required(),
    player: Joi.string().trim().required(),
  }),
};
module.exports = {
  createTournament,
};
