import React, { useState } from "react";
import { handleAddSubCategory } from "../crud/AddSubcategory"; // Import add function

const SubcategoriesForm = ({ setShowForm, categoryId, setSubCategories }) => {
  const [newSubCategory, setNewSubCategory] = useState({
    name: "",
    quantity: "",
    quality: "",
    size: "",
    color: "",
    material: "",
    brand: "",
    price: "",
    discount: "",
    reviews: "",
    deliveryFree: false,
    description: "",
    images: null,
  });

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleAddSubCategory(
      e,
      newSubCategory,
      categoryId,
      setSubCategories,
      setShowForm
    );
  };

  // Handle checkbox change for deliveryFree
  const handleCheckboxChange = (e) => {
    setNewSubCategory({
      ...newSubCategory,
      deliveryFree: e.target.checked,
    });
  };

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubCategory({
      ...newSubCategory,
      [name]: value,
    });
  };

  // Handle file input for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewSubCategory({
      ...newSubCategory,
      images: file,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newSubCategory.name}
          onChange={handleInputChange}
          required
        />

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={newSubCategory.quantity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Quality:</label>
          <input
            type="text"
            name="quality"
            value={newSubCategory.quality}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={newSubCategory.size}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={newSubCategory.color}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Material:</label>
          <input
            type="text"
            name="material"
            value={newSubCategory.material}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={newSubCategory.brand}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={newSubCategory.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Discount:</label>
          <input
            type="number"
            name="discount"
            value={newSubCategory.discount}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newSubCategory.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Reviews:</label>
          <input
            type="number"
            name="reviews"
            value={newSubCategory.reviews}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Delivery Free:</label>
          <input
            type="checkbox"
            name="deliveryFree"
            checked={newSubCategory.deliveryFree}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <label>Images:</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button type="button" onClick={handleCloseForm}>
          Cancel
        </button>
        <button type="submit">Add Subcategory</button>
      </form>
    </div>
  );
};

export default SubcategoriesForm;
