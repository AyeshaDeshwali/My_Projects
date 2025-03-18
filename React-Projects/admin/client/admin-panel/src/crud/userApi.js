export const fetchUserDetails = async (userId) => {
  console.log("Calling API for user ID:", userId); // Debug
  try {
    const response = await fetch(
      `http://localhost:5003/api/users/view/${userId}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch user details: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("API Response:", data); // Debug
    return data;
  } catch (error) {
    console.error("Error in fetchUserDetails:", error);
    throw error;
  }
};
