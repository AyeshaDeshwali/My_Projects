const SubCategory = require("../models/SubCategory");

// Get All Sub-Categories
exports.getAllSubCategorys = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Sub-Category

exports.addSubCategory = async (req, res) => {
  try {
    const {
      name,
      quantity,
      quality,
      price,
      size,
      color,
      material,
      brand,
      discount,
      description,
      reviews,
      deliveryFree,
      categoryId,
    } = req.body;
    if (!name || !quantity || !quality || !price || !categoryId) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Handle image upload
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

    const newSubCategory = new SubCategory({
      name,
      quantity,
      quality,
      price,
      size,
      color,
      material,
      brand,
      discount,
      description,
      reviews,
      categoryId,
      deliveryFree,
      images: imagePath, // Save the image path to the database
    });

    const savedSubCategory = await newSubCategory.save();

    console.log("Subcategory added:", savedSubCategory); // Log the added subcategory

    res.status(201).json(savedSubCategory); // Send success response with subcategory data
  } catch (error) {
    console.error("Error adding subcategory:", error); // Log any errors
    res
      .status(500)
      .json({ message: "Failed to add subcategory", error: error.message });
  }
};

// Update Sub-Category
exports.updateSubCategory = async (req, res) => {
  try {
    console.log(req.body); // Log body data
    const { id } = req.params; // Extract subcategory ID from URL
    console.log("Update Request Params ID:", id); // Log the ID
    console.log("Update Request Body:", req.body); // Log the parsed data

    const updateData = req.body; // Extract update data from request body

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id, // Subcategory ID
      updateData, // Data to update
      { new: true, runValidators: true } // Options
    );

    if (!updatedSubCategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    console.log("Updated Subcategory in DB:", updatedSubCategory);

    res.status(200).json(updatedSubCategory);
  } catch (error) {
    console.error("Error updating subcategory:", error);
    res.status(500).json({ message: "Failed to update subcategory", error });
  }
};

// Delete Sub-Category
exports.deleteSubCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);
    if (!deletedSubCategory) {
      return res.status(404).json({ message: "Sub-Category not found" });
    }
    res.status(200).json({ message: "Sub-Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
