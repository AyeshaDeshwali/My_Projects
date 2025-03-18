export const handleAddSubCategory = async (
  e,
  newSubCategory,
  categoryId,
  setSubCategories,
  setShowForm
) => {
  e.preventDefault();

  const formData = new FormData();
  for (let key in newSubCategory) {
    formData.append(key, newSubCategory[key]);
  }
  formData.append("categoryId", categoryId);

  try {
    const response = await fetch("http://localhost:5003/api/sub_category/add", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error from server:", errorResponse);
      throw new Error("Failed to add subcategory");
    }

    const addedSubCategory = await response.json();
    setSubCategories((prev) => [...prev, addedSubCategory]);
    setShowForm(false); // Close form after successful submission
  } catch (error) {
    console.error("Error adding subcategory:", error);
  }
};
