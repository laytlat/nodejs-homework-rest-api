const express = require("express");

const { bodyValidation, authenticate, upload } = require("../../middlewares");
const { authSchema, subscriptionSchema } = require("../../schemas");
const ctrl = require("../../controllers/authControllers");

const router = express.Router();

router.post("/register", bodyValidation(authSchema), ctrl.register);

router.post("/login", bodyValidation(authSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.patch(
  "/",
  authenticate,
  bodyValidation(subscriptionSchema),
  ctrl.changeSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
