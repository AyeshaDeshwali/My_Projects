import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Subcategories.css"; // Make sure this file contains necessary styles

const SubcategoriesPage = () => {
  const { categoryId } = useParams(); // Extract categoryId from URL
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSubCategory, setEditingSubCategory] = useState(null); // To track editing
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
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
    images: null, // Handle file uploads separately
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/api/sub_category/${categoryId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch subcategories");
        }
        const data = await response.json();
        setSubCategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [categoryId]);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // For checkbox, convert to boolean: if checked, set to true, otherwise false
      setNewSubCategory({ ...newSubCategory, [name]: checked });
    } else {
      setNewSubCategory({ ...newSubCategory, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setNewSubCategory({ ...newSubCategory, images: file });
    console.log("Selected image:", file); // Log the selected file
  };
  const handleAddSubCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in newSubCategory) {
      formData.append(key, newSubCategory[key]);
    }
    formData.append("categoryId", categoryId);

    console.log(
      "FormData before submission:",
      Object.fromEntries(formData.entries()) // Log form data
    ); // Debug log

    try {
      const response = await fetch(
        "http://localhost:5003/api/sub_category/add",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error from server:", errorResponse);
        throw new Error("Failed to add subcategory");
      }

      const addedSubCategory = await response.json();
      console.log("Added subcategory:", addedSubCategory);
      setSubCategories([...subCategories, addedSubCategory]);
      setShowForm(false); // Hide the form after successful submission
      setNewSubCategory({
        name: "",
        quantity: "",
        quality: "",
        size: "",
        color: "",
        material: "",
        brand: "",
        price: "",
        discount: "",
        description: "",
        reviews: "",
        deliveryFree: false,
        images: null,
      });
    } catch (error) {
      console.error("Error adding subcategory:", error);
    }
  };
  const toggleAccordion = (index) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index].isAccordionOpen =
      !updatedSubCategories[index].isAccordionOpen;
    setSubCategories(updatedSubCategories);
  };
  // Filter the subcategories based on the search query
  const filteredSubCategories = subCategories.filter((subCategory) =>
    subCategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete Subcategory Function
  const handleDeleteSubCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subcategory?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5003/api/sub_category/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete subcategory");
      }

      // Update the UI after successful deletion
      setSubCategories((prev) =>
        prev.filter((subCategory) => subCategory._id !== id)
      );
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  const handleEditClick = (subCategory) => {
    console.log("Editing subcategory:", subCategory); // Log the subcategory being edited
    setEditingSubCategory(subCategory);
    setNewSubCategory(subCategory); // Prefill the form with existing data
    setShowForm(true); // Show the form
  };
  // Update Subcategory Function
  const handleUpdateSubCategory = async (e) => {
    e.preventDefault();

    // Ensure images is either the new image or the old one if no new image is uploaded
    const updatedSubCategory = {
      name: newSubCategory.name,
      quantity: newSubCategory.quantity,
      quality: newSubCategory.quality,
      size: newSubCategory.size,
      color: newSubCategory.color,
      material: newSubCategory.material,
      brand: newSubCategory.brand,
      price: newSubCategory.price,
      discount: newSubCategory.discount,
      reviews: newSubCategory.reviews,
      deliveryFree: newSubCategory.deliveryFree,
      description: newSubCategory.description,
      images: newSubCategory.images || editingSubCategory.images, // Don't overwrite images with null
    };

    // Check if we need to send image as file (form data)
    let formData = new FormData();

    // Append all fields to formData
    Object.keys(updatedSubCategory).forEach((key) => {
      formData.append(key, updatedSubCategory[key]);
    });

    try {
      const response = await fetch(
        `http://localhost:5003/api/sub_category/update/${editingSubCategory._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedSubCategory),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update subcategory");
      }

      const updatedCategory = await response.json();
      console.log("Updated category from backend:", updatedCategory);

      // Update the state after successful update
      setSubCategories((prev) =>
        prev.map((subCategory) =>
          subCategory._id === updatedCategory._id
            ? updatedCategory
            : subCategory
        )
      );

      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Error updating subcategory:", error);
    }
  };

  const resetForm = () => {
    setNewSubCategory({
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
    setEditingSubCategory(null); // Reset editing state
  };

  return (
    <>
      <div className="search-and-button">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {showForm && <div className="overlay"></div>}

        <button onClick={() => setShowForm(!showForm)}>
          {/* {showForm ? "Cancel" : "Add Products"} */}
          Add Products
        </button>
      </div>

      <div className="subcategories-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
              Subcategories
            </h3>

            <div className="subcategory-list">
              {filteredSubCategories.length === 0 ? (
                <p>Not Found</p> // Show this message when no subcategories match the search query
              ) : (
                filteredSubCategories.map((subCategory, index) => (
                  <div key={subCategory._id} className="subcategory-box">
                    <h3>{subCategory.name}</h3>

                    {subCategory.images && (
                      <div className="subcategory-image">
                        <img
                          src={`http://localhost:5003${subCategory.images}`}
                          alt={subCategory.name}
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    )}

                    <div className="price-and-delivery">
                      <p>Price: ₹{subCategory.price}</p>
                      <p
                        style={{
                          backgroundColor: "#f8f0ff",
                          borderRadius: "50px",
                          padding: "2px",
                          paddingLeft: "15px",
                          paddingRight: "15px",
                        }}
                      >
                        Delivery: {subCategory.deliveryFree ? "Free" : "Paid"}
                      </p>

                      <div className="star-rating">
                        <div className="stars-container">
                          {/* Star icons */}
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star-half-stroke"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        {subCategory.reviews ? (
                          <p>
                            <strong style={{ color: "#89888a" }}>
                              Reviews:{" "}
                            </strong>
                            <span style={{ color: "black" }}>
                              {subCategory.reviews}
                            </span>
                          </p>
                        ) : null}
                      </div>

                      <div className="icon-container">
                        <i
                          className="fa-regular fa-pen-to-square"
                          title="Edit"
                          onClick={() => handleEditClick(subCategory)} // Trigger edit preparation
                          style={{ cursor: "pointer", marginRight: "10px" }}
                        ></i>

                        <i
                          className="fa-solid fa-trash-can"
                          title="Delete"
                          onClick={() =>
                            handleDeleteSubCategory(subCategory._id)
                          }
                        ></i>
                      </div>
                    </div>

                    <button
                      className="accordion-button"
                      onClick={() => toggleAccordion(index)}
                    >
                      {subCategory.isAccordionOpen
                        ? "Hide Details"
                        : "Show Details"}
                    </button>

                    {subCategory.isAccordionOpen && (
                      <div className="accordion-content">
                        <div>
                          <label>Quantity:</label>
                          <span>{subCategory.quantity}</span>
                        </div>
                        <div>
                          <label>Quality:</label>
                          <span>{subCategory.quality}</span>
                        </div>
                        <div>
                          <label>Discount:</label>
                          <span>{subCategory.discount}%</span>
                        </div>
                        <div>
                          <label>Description:</label>
                          <span>{subCategory.description}</span>
                        </div>
                        <div>
                          <label>Size:</label>
                          <span>{subCategory.size}</span>
                        </div>
                        <div>
                          <label>Color:</label>
                          <span>{subCategory.color}</span>
                        </div>
                        <div>
                          <label>Material:</label>
                          <span>{subCategory.material}</span>
                        </div>
                        <div>
                          <label>Brand:</label>
                          <span>{subCategory.brand}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {showForm && (
              <div className="form-container">
                <form
                  onSubmit={
                    editingSubCategory
                      ? handleUpdateSubCategory
                      : handleAddSubCategory
                  }
                  className="add-form"
                >
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
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={handleCloseForm}
                  >
                    Cancel
                  </button>
                  <button type="submit">
                    {editingSubCategory ? "Update Product" : "Add Product"}
                  </button>
                  <button type="button" onClick={resetForm}>
                    Reset
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SubcategoriesPage;
