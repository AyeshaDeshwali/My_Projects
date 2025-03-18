import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      if (userData) {
        setUserName(userData.username);
      }
    };
    fetchUserData();
  }, []);

  // Check if currentUser exists before rendering
  if (!currentUser || !currentUser.username) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }

  @media (max-width: 768px) {
    .contact-item {
      font-size: 16px;
    }
    .navbar {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    display: none; /* Hide welcome page for screens smaller than 400px */
  }
`;
