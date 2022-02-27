const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const women_collection = require("../model/women_collection_model");

router.post("/women", crudController(women_collection).post);
router.get("/women", crudController(women_collection).get);
router.get("/women/:id", crudController(women_collection).getOne);
router.delete("/women/:id", crudController(women_collection).delete);
router.patch("/women/:id", crudController(women_collection).patch);


module.exports = router;