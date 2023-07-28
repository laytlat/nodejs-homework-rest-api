const {
  bodyValidation,
  bodyValidationForFavorite,
} = require("./bodyValidation");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");

module.exports = {
  bodyValidation,
  isValidId,
  bodyValidationForFavorite,
  authenticate,
};
