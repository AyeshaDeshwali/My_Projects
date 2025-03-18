export const updateUser = async (userId, updatedData) => {
  try {
    if (!userId) {
      throw new Error("User ID is missing");
    }
    const response = await fetch(
      `http://localhost:5003/api/users/update/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
