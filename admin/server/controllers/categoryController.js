const Category = require("../models/Category");

// Get All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Category
exports.addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Paginated Categories
exports.getPaginatedCategories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";

  const query = {
    name: { $regex: search, $options: "i" }, // Case-insensitive search
  };

  try {
    const totalCategories = await Category.countDocuments(query);
    const categories = await Category.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      categories,
      totalPages: Math.ceil(totalCategories / limit),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching paginated categories", error });
  }
};
