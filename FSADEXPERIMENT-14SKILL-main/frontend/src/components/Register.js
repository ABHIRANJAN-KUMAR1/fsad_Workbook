import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8093/api/register", user); 

      alert("Registered Successfully!");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Error: Backend not running or issue in API");
    }
  };

  return (
    <div className="container"> 
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          placeholder="Username"
          onChange={(e) =>
            setUser({ ...user, username: e.target.value })
          }
        />

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

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;