import React, { useState, useEffect } from "react";
import "../styles/UserForm.css";

const UserForm = ({ type, user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    phoneNumber: "",
    isAdmin: false,
    image: "",
    gender: "",
    bio: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  const [error, setError] = useState(""); // To hold the error message for email validation

  useEffect(() => {
    if (type === "edit" && user) {
      setFormData(user); // This should include _id
    }
  }, [type, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.email || !formData.password || !formData.phoneNumber) {
        alert("Required fields are missing!");
        return;
      }

      const formDataToSend = { ...formData }; // Clone the form data
      await onSave(formDataToSend); // Ensure this sends the entire user object
    } catch (err) {
      console.error("Error while saving user:", err);
    }
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Image ko state mein store karna
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Row 1: Name and Email */}
      <div className="form-row">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setError(""); // Clear error when typing
            }}
            placeholder="Enter email"
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
      </div>

      {/* Row 2: Phone Number and Age */}
      <div className="form-row">
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber || ""} // Default to empty string if undefined
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Enter age"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="age">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password..."
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">dateOfBirth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            placeholder="Enter date of birth..."
          />
        </div>
      </div>

      <div className="address-section">
        <div className="form-row">
          <div>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.address?.street || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value },
                })
              }
              placeholder="Enter street"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.address?.city || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
              placeholder="Enter city"
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.address?.state || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, state: e.target.value },
                })
              }
              placeholder="Enter state"
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.address?.postalCode || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, postalCode: e.target.value },
                })
              }
              placeholder="Enter postal code"
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="preview"
              width="100"
              height="100"
            />
          )}
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio} // Bind it to formData
            onChange={
              (e) => setFormData({ ...formData, bio: e.target.value }) // Update the bio in formData
            }
            placeholder="Enter your bio..."
          />
        </div>
      </div>
      {/* Image Upload and Admin Checkbox */}
      <div className="form-row">
        <div>
          <label>Admin</label>
          <input
            type="checkbox"
            checked={formData.isAdmin}
            onChange={(e) =>
              setFormData({ ...formData, isAdmin: e.target.checked })
            }
          />
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"} // Check if male is selected
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"} // Check if female is selected
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              Female
            </label>
          </div>
        </div>
      </div>

      {/* Address Inputs */}

      {/* Submit and Cancel Buttons */}
      <div className="form-row">
        <button type="submit">
          {type === "add" ? "Add User" : "Update User"}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
