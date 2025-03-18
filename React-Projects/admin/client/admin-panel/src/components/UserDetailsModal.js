import React from "react";
import "./UserDetailsModal.css";

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>User Details</h3>
        <div className="user-details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phoneNumber}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
          <div className="address">
            <p>
              <strong>Address:</strong>
            </p>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state}</p>
            <p>Postal Code: {user.address.postalCode || "N/A"}</p>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
