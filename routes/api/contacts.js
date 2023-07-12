const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contactControllers");
const { contactsValidation } = require("../../middlewares");
const { contactScheema } = require("../../schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", contactsValidation(contactScheema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put(
  "/:contactId",
  contactsValidation(contactScheema),
  ctrl.updateContact
);

module.exports = router;
