const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contactControllers");
const {
  contactsValidation,
  isValidId,
  contactsValidationForFavirute,
} = require("../../middlewares");
const { contactScheema, updateFavoriteSchema } = require("../../schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", contactsValidation(contactScheema), ctrl.addNewContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  contactsValidation(contactScheema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  contactsValidationForFavirute(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
