import express from "express";

const router = express.Router();

router.get("/list", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

router.get("/find/:id", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

router.post("/create", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

router.delete("/delete", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

router.patch("/edit/:id", (req, res) => {
  console.log(`La route ${req.originalUrl} fonctionne`);

});

export default router;