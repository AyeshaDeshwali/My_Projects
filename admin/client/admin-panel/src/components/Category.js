import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams(); // Get the category ID from the route
  const [subCategories, setSubCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch category and subcategories
    const fetchCategoryData = async () => {
      try {
        const categoryResponse = await fetch(
          `http://localhost:5003/api/categories/${id}`
        );
        const categoryData = await categoryResponse.json();
        setCategoryName(categoryData.name);

        const subCategoryResponse = await fetch(
          `http://localhost:5003/api/sub_category/${id}`
        );
        const subCategoryData = await subCategoryResponse.json();
        setSubCategories(subCategoryData);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

  return (
    <div className="category-page">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{categoryName}</h2>
          <ul>
            {subCategories.map((subCategory) => (
              <li key={subCategory._id}>{subCategory.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Category;
