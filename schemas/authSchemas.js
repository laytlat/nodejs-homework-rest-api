const Joi = require("joi");

const emailRegexp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const subscriptionList = ["starter", "pro", "business"];

const authSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp).messages({
    "string.pattern.base": "invalid email",
    "any.required": "missing required email field",
  }),
  password: Joi.string().required().min(6).messages({
    "string.min": "password must be at least 6 symbols",
    "any.required": "missing required password field",
  }),
  subscription: Joi.string().valid(...subscriptionList),
  token: Joi.string(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .messages({
      "any.required": "missing required subscription field",
    })
    .valid(...subscriptionList),
});

module.exports = { authSchema, subscriptionSchema };
