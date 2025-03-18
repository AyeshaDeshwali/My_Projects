// src/components/UserDetailsModal.js
import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "../crud/fetchUserDetails";

const UserView = ({ userId, closeModal }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDetails = await fetchUserDetails(userId);
        setUser(userDetails);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user details:,,,,", error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-modal">
      <div className="modal-content">
        <h2>User Details</h2>
        {user && (
          <>
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
              <strong>Phone:</strong> {user.phoneNumber}
            </p>
            <p>
              <strong>Bio:</strong> {user.bio}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.city}, {user.address.state}
            </p>
          </>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default UserView;
