const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getPaginatedCategories,
} = require("../controllers/categoryController");

// Get All Categories
router.get("/", getAllCategories);

// Add Category
router.post("/add", addCategory);

// Update Category
router.put("/update/:id", updateCategory);

// Delete Category
router.delete("/delete/:id", deleteCategory);

// Get Paginated Categories
router.get("/paginated", getPaginatedCategories);

module.exports = router;
