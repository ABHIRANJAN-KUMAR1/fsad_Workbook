import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");

    // 🔐 If not logged in → redirect
    if (!id) {
      navigate("/");
      return;
    }

    axios
      .get(`http://localhost:8093/api/profile/${id}`) // ✅ correct API
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        alert("Error fetching profile");
      });
  }, [navigate]);

  return (
    <div className="profile-card"> {/* ✅ better CSS class */}
      <h2>Profile Page</h2>

      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;