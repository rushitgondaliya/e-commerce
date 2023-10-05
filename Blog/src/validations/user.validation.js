const Joi = require("joi");

// create user
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        role: Joi.string().valid('player', 'coach', 'admin').default('player').required()
    })
}

module.exports = {
    createUser
}
