import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2>Users API</h2>
      <div className="card-container">
        {users.map(u => (
            <div className="card" key={u.id}>
                <p><b>Name:</b> {u.name}</p>
                <p><b>Email:</b> {u.email}</p>
                <p><b>Phone:</b> {u.phone}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;