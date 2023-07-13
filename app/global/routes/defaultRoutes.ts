import { Router } from "express";

// create express router
const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("This is the API for clifford");
});

// Every route that is unused will redirect to page 404
router.get(":file", (req, res) => {
  res.status(404).send("ERROR 404!");
});

router.get("*", (req, res) => {
  res.status(404).send("ERROR 404!");
});

router.post(":file", (req, res) => {
  res.status(404).send("ERROR 404!");
});

router.post("*", (req, res) => {
  res.status(404).send("ERROR 404!");
});

export default router;