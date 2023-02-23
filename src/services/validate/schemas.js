const Joi = require('joi');

const salesSchemas = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = {
salesSchemas,
};
