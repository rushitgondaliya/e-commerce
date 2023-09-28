const joi=require("joi")

/** creatr Cart */
const createCart={
    body: joi.object().keys({
        total: joi.number().required(),
        quantity : joi.number().integer().required(),
        user: joi.string().required(),
        product: joi.string().required(),
        order: joi.string().required()
    }),
}
module.exports={createCart};