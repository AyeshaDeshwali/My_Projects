// src/crud/updateUser.js
export const addUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:5003/api/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      // If the response is not ok, attempt to parse the error message
      const errorText = await response.text(); // Read the response as text (in case it's HTML)
      throw new Error(errorText); // Throw an error with the message from the response
    }

    return await response.json(); // If successful, parse the response as JSON
  } catch (error) {
    throw error; // Pass the error to the calling function
  }
};
