import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const api = `https://api.dicebear.com/7.x/bottts/svg?seed=`;
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  }, [navigate]); // navigate को dependency में जोड़ा गया

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = JSON.parse(localStorage.getItem("chat-app-user"));
      console.log("Avatar Data:", avatars[selectedAvatar]);

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        avatarImage: avatars[selectedAvatar],
      });

      console.log(data);

      if (data.isSet) {
        // Update localStorage properly
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-app-user", JSON.stringify(user));
        navigate("/"); // Navigate to home page after successful avatar set
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = [];
      // 4 different avatars ko unique random seed ke saath fetch karenge
      for (let i = 0; i < 4; i++) {
        const randomSeed = Math.random().toString(36).substring(7); // Generate random seed
        const image = `${api}${randomSeed}`; // Create the API URL with the random seed
        data.push(image);
      }
      setAvatars(data);
      setIsLoading(false);
    };
    fetchAvatars();
  }, [api]);

  return (
    <>
      {isLoading ? (
        <Container>
          {/* <img
            src="https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif"
            alt="loader"
            className="loader"
          />{" "} */}
          <img
            src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"
            alt="loader"
            className="loader"
          />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedAvatar(index)}
                >
                  <img src={avatar} alt="avatar" />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className="submit-btn">
            Set as Profile Picture
          </button>
        </Container>
      )}

      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .title-container {
    h1 {
      color: white;
    }
  }

  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;

      img {
        height: 6rem;
      }

      &.selected {
        border: 0.4rem solid #4e0eff;
      }
    }
  }

  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
      background-color: #997af0;
    }
  }

  @media (max-width: 768px) {
    .avatars {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }

    .avatar img {
      height: 4rem;
      width: 4rem;
    }

    .submit-btn {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .title-container h1 {
      font-size: 1.2rem;
      text-align: center;
    }

    .avatars {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem; /* Avatars के बीच में कम gap */
      flex-wrap: nowrap; /* Avatars को एक ही लाइन में रखने के लिए */
    }

    .avatar {
      border: 0.2rem solid transparent;
      padding: 0.2rem;
      width: 81px;
      height: 81px;
      border-radius: 50%;
      transition: 0.2s ease-in-out;
    }

    .avatar img {
      height: 2.8rem;
      width: 2.8rem; /* Avatars को छोटा किया */
    }

    .avatar.selected {
      width: 81px;
      height: 81px;
      border: 0.2rem solid #4e0eff; /* Selected avatar को highlight किया */
    }

    .submit-btn {
      font-size: 0.9rem;
      padding: 0.6rem 0.8rem;
      margin-top: 0.5rem;
    }
  }
`;
