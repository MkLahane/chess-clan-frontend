import React, { useState, useEffect } from "react";
import { setAuthToken } from "./contexts/AuthToken";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const data = await res.json();
      setAuthToken(data.accessToken);
      setLoading(false);
      console.log(data);
    });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
