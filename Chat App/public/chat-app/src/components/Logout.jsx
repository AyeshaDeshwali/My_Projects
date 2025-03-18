import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    alert("Logout button clicked!"); // Debugging

    const storedUser = localStorage.getItem("chat-app-user");
    if (!storedUser) {
      console.log("No user found in localStorage");
      return;
    }

    const user = JSON.parse(storedUser);
    console.log("Logout API Call:", `${logoutRoute}/${user._id}`);

    try {
      const response = await axios.get(`${logoutRoute}/${user._id}`);
      console.log("Logout Response:", response.data);

      localStorage.removeItem("chat-app-user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <Button onClick={handleLogout}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
