const Joi = require("joi");

/** Create Player Validation */
const createPlayer = {
  body: Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    phone_no: Joi.string().trim().required(),
    player_img: Joi.string().allow(),
    specification: Joi.string().trim().required(),
    coach: Joi.string().trim().required(),
  }),
};

module.exports = {
  createPlayer,
};
