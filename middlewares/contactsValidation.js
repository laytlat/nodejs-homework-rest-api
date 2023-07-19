const { HttpError } = require("../utils");

const contactsValidation = (schema) => {
  return (req, res, next) => {
    if (!Object.keys(req.body).length) {
      return next(HttpError(400, "Missing fields"));
    }
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
};

const contactsValidationForFavirute = (schema) => {
  return (req, res, next) => {
    if (!Object.keys(req.body).length) {
      return next(HttpError(400, "missing field favorite"));
    }
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
};

module.exports = { contactsValidation, contactsValidationForFavirute };
