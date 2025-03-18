// routes/SubCategoryRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const SubCategory = require("../models/SubCategory");
const router = express.Router();
const {
  addSubCategory,
  deleteSubCategory,
  updateSubCategory,
  getAllSubCategorys, // Ensure spelling is correct
} = require("../controllers/SubCategoryController");

router.get("/view/:SubCategoryId", async (req, res) => {
  try {
    const SubCategory = await SubCategory.findById(req.params.SubCategoryId);
    if (!SubCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }
    res.json(SubCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route: Get subcategories by categoryId
router.get("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params; // Get categoryId from URL
    console.log("Category ID received:", categoryId); // Debug log
    const subCategories = await SubCategory.find({ categoryId }); // Fetch subcategories by categoryId

    if (!subCategories.length) {
      return res
        .status(404)
        .json({ message: "No subcategories found for this category" });
    }

    res.status(200).json(subCategories); // Return matching subcategories
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Failed to fetch subcategories" });
  }
});

// Multer setup for file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Ensure "uploads" folder exists
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    },
  }),
});
router.get("/", getAllSubCategorys);
// router.post("/add", addSubCategory);

// Add SubCategory with image upload
// router.post("/add", addSubCategory);
router.post("/add", upload.single("images"), addSubCategory);

router.put("/update/:id", updateSubCategory);
router.delete("/delete/:id", deleteSubCategory);

module.exports = router;
