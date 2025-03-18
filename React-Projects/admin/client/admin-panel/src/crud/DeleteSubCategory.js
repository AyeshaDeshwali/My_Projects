export const handleDeleteSubCategory = async (id) => {
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

    // Handle UI update after successful deletion
    alert("Subcategory deleted successfully!");
  } catch (error) {
    console.error("Error deleting subcategory:", error);
  }
};
