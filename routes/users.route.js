import express from "express";
import UserService from "../services/users.service";
import { logError } from "../utilities";

const router = express.Router();

router.get("/list", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);
  res.json(UserService.list());
});

router.get("/find/:id", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);
  const { id } = req.params;
  try {
    let user = UserService.find(id);
    res.json(user);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
      code: error.code,
    });
  }
});

router.post("/create", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);
  const { nom, prenom, email } = req.body;
  try {
    res.json(UserService.create({ nom, prenom, email }));
  } catch (error) {
    res.status(error.status).json({
      msg: error.message,
      code: error.code,
    });
  }
});

router.delete("/delete", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);
  const { id } = req.body;
  try {
    res.json(UserService.delete(id));
  } catch (error) {
    res.status(error.status).json({
      msg: error.message,
      code: error.code,
    });
  }
});

router.patch("/edit/:id", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);
  const { id } = req.params;
  const { nom, prenom, email } = req.body;
  try {
    const users = UserService.edit({ id, nom, prenom, email });
    res.send(users);
  } catch (error) {
      res.status(err.status).send(err.message);
  }
});

export default router;
