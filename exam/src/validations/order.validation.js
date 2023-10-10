const joi=require("joi")

/** creatr Order */
const createOrder={
    body: joi.object().keys({
        total: joi.number().required(),
        orderStatus: joi.string().required().trim(),
        user: joi.string().required(),
        product: joi.string().required()
    })
}
module.exports={createOrder};