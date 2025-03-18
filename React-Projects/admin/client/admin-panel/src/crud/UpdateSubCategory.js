import React, { useState } from "react";

const UpdateSubCategory = ({ existingData, onSubCategoryUpdated }) => {
  const [updatedSubCategory, setUpdatedSubCategory] = useState(existingData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSubCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5003/api/sub_category/update/${existingData._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedSubCategory),
        }
      );

      if (!response.ok) throw new Error("Failed to update subcategory");

      const updatedData = await response.json();
      onSubCategoryUpdated(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      {/* Form inputs */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newSubCategory.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={newSubCategory.quantity || ""} // Ensure it's never undefined
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
        <label>Reviews</label>
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
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Images:</label>
        <input
          type="file"
          name="images"
          onChange={handleImageChange}
          accept="image/*" // Add this to restrict to images
        />
      </div>
      {/* Add other fields here */}
      <button type="submit">Update Subcategory</button>
    </form>
  );
};

export default UpdateSubCategory;
