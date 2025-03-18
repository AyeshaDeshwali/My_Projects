// src/crud/deleteUser.js
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:5003/api/users/delete/${userId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
