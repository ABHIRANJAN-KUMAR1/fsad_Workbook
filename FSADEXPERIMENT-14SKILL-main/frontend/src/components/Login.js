import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8093/api/login", user); 

      if (res.data) {
        localStorage.setItem("userId", res.data.id);
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }

    } catch (err) {
      console.error(err);
      alert("Server error / Backend not running");
    }
  };

  return (
    <div className="container"> 
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button type="submit">Login</button>

        <p>
          New user? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;