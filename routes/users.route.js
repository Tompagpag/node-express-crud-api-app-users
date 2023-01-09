import express from "express";
import UserService from "../services/users.service";
import { body, validationResult, param } from "express-validator";
const router = express.Router();

router.get("/list", (req, res) => {
  let list = UserService.listUser();
  if (req.useRender) {
    return res.render("users/list");
  }
  res.json(list);
});
router.post(
  "/create",
  body("email")
    .isEmail()
    .custom((value) => {
      let isAlreadyIn = UserService.findUserByEmail(value);
      if (isAlreadyIn) {
        return Promise.reject("L'email existe déjà");
      }
      return Promise.resolve();
    }),

  body(["nom", "prenom"]).isAlpha().isLength({ min: 2 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { nom, prenom, email } = req.body;
    try {
      let users = UserService.create({ nom, prenom, email });
      res.json(users);
    } catch (err) {
      res.status(err.status).json({
        message: err.message,
        code: err.code,
      });
    }
  }
);
router.get("/find/:id", param("id").isInt(), (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = UserService.find(id);
    res.json(user);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
      code: err.code,
    });
  }
});

router.delete("/delete", body("id", "Il faut un id").isInt(), (req, res) => {
  const { id } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let users = UserService.delete(id);
    res.json(users);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
      code: err.code,
    });
  }
});

router.patch(
  "/edit/:id",
  param("id").isInt(),
  body("email").isEmail(),
  body(["nom", "prenom"]).isAlpha().isLength({ min: 2 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { nom, prenom, email } = req.body;
    try {
      const users = UserService.edit({ id, nom, prenom, email });
      res.status(200).send(users);
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  }
);

export default router;
