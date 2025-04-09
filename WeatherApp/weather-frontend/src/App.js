import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import WeatherApp from "./WeatherApp";

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <div>
      {user ? (
        <WeatherApp onAuthSuccess={setUser} /> // 👈 pass down logout handler
      ) : (
        <AuthForm onAuthSuccess={setUser} />
      )}
    </div>
  );
}

export default App;
