const fetchSubCategories = async (categoryId) => {
  try {
    console.log("Fetching subcategories for categoryId:", categoryId);

    const response = await fetch(
      `http://localhost:5003/api/sub_category/${categoryId}`
    );

    console.log("API Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch subcategories: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching subcategories:", error.message);
    return [];
  }
};

export default fetchSubCategories;
