import { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter((p) => p.userId === Number(filter))
    : posts;

  return (
    <div className="container">
      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      <br /><br />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {filteredPosts.map((p) => (
        <div className="card" key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FakePostList;