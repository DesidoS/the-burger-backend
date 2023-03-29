const Joi = require("joi");

const addCommentsSchema = Joi.object({
  author: Joi.string().required(),
  content: Joi.string().required(),
  rating: Joi.number().required(),
  age: Joi.string().required(),
});

module.exports = {
  addCommentsSchema,
};
