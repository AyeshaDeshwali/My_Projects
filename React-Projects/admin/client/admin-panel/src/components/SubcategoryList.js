import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteSubCategory } from "../crud/DeleteSubcategory"; // Import delete function
import { UpdateSubCategory } from "../crud/UpdateSubcategory"; // Import update function
import { useNavigate } from "react-router-dom";

const SubcategoriesList = ({
  subCategories,
  searchQuery,
  setSubCategories,
}) => {
  const history = useHistory();
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  // Filter subcategories based on search query
  const filteredSubCategories = subCategories.filter((subCategory) =>
    subCategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Navigate to the update page
  const handleEditClick = (id) => {
    history.push(`/edit/${id}`); // Navigate to update page
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <button onClick={navigateToHome}>Go Home</button>
      <div className="subcategory-list">
        {filteredSubCategories.map((subCategory, index) => (
          <div key={subCategory._id} className="subcategory-box">
            <h3>{subCategory.name}</h3>

            {/* Image Section */}
            {subCategory.images && (
              <div className="subcategory-image">
                <img
                  src={`http://localhost:5003${subCategory.images}`}
                  alt={subCategory.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
            )}

            {/* Price and Delivery Info */}
            <div className="price-and-delivery">
              <p>Price: ₹{subCategory.price}</p>
              <p
                style={{
                  backgroundColor: "#f8f0ff",
                  borderRadius: "50px",
                  padding: "2px 15px",
                }}
              >
                Delivery: {subCategory.deliveryFree ? "Free" : "Paid"}
              </p>

              {/* Star Rating */}
              <div className="star-rating">
                {subCategory.reviews && (
                  <i>
                    <strong style={{ color: "#89888a" }}>Reviews:</strong>{" "}
                    <span style={{ color: "#89888a" }}>
                      {subCategory.reviews}
                    </span>
                  </i>
                )}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>

              {/* Edit/Delete Actions */}
              <div className="icon-container">
                <i
                  className="fa-regular fa-pen-to-square"
                  title="Edit"
                  onClick={() => handleEditClick(subCategory._id)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                ></i>
                <i
                  className="fa-solid fa-trash-can"
                  title="Delete"
                  onClick={() =>
                    handleDeleteSubCategory(subCategory._id, setSubCategories)
                  }
                ></i>
              </div>
            </div>

            {/* Accordion Toggle */}
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              {openAccordionIndex === index ? "Hide Details" : "Show Details"}
            </button>

            {/* Accordion Content */}
            {openAccordionIndex === index && (
              <div className="accordion-content">
                <div>
                  <label>Quantity:</label>
                  <span>{subCategory.quantity || "N/A"}</span>
                </div>
                <div>
                  <label>Quality:</label>
                  <span>{subCategory.quality || "N/A"}</span>
                </div>
                <div>
                  <label>Discount:</label>
                  <span>{subCategory.discount || "N/A"}%</span>
                </div>
                <div>
                  <label>Description:</label>
                  <span>{subCategory.description || "N/A"}</span>
                </div>
                <div>
                  <label>Size:</label>
                  <span>{subCategory.size || "N/A"}</span>
                </div>
                <div>
                  <label>Color:</label>
                  <span>{subCategory.color || "N/A"}</span>
                </div>
                <div>
                  <label>Material:</label>
                  <span>{subCategory.material || "N/A"}</span>
                </div>
                <div>
                  <label>Brand:</label>
                  <span>{subCategory.brand || "N/A"}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubcategoriesList;
