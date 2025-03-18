import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home"; // अपना Home Component इम्पोर्ट करें
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast"; // Correct import for react-hot-toast
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        {" "}
        {/* केवल Routes और Route का उपयोग करें */}
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />{" "}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
