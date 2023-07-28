const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contactControllers");
const {
  bodyValidation,
  isValidId,
  bodyValidationForFavorite,
  authenticate,
} = require("../../middlewares");
const { contactScheema, updateFavoriteSchema } = require("../../schemas");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  bodyValidation(contactScheema),
  ctrl.addNewContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  bodyValidation(contactScheema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  bodyValidationForFavorite(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
