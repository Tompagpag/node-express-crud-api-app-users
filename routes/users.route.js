import express from "express";
import UserService from "../services/users.service";

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
  try {
    const { nom, prenom, email } = req.body;
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

});

router.patch("/edit/:id", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

export default router;
