import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  // 🔐 Protect route (if not logged in)
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear(); // ✅ clear all
    navigate("/"); // ✅ better than window.location
  };

  return (
    <>
      {/* ✅ Navbar */}
      <div className="navbar">
        <h3>My App</h3>

        <div>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      {/* ✅ Content */}
      <div className="container">
        <h1>Welcome to Home Page</h1>
        <p>You are successfully logged in 🎉</p>
      </div>
    </>
  );
}

export default Home;