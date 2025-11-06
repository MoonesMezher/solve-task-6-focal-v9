const express = require("express");
const router = express.Router();

// controller
const productController = require("../controllers/product.controller");

// middlewares
const productIsExist = require("../middlewares/productIsExist.middlewrae");

// GET
router.get("/", productController.getAll)

router.get("/:id", [productIsExist], productController.getById)

router.get("/export/json", productController.exportJson)

// POST
router.post("/", productController.add)

// PUT
router.put("/:id", [productIsExist], productController.update)

// DELETE
router.delete("/:id", [productIsExist], productController.remove)

module.exports = router