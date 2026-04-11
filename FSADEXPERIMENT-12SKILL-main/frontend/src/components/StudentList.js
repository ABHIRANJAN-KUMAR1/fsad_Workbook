import React, { useEffect, useState } from "react";
import API from "../services/api";

function StudentList({ onEdit, refresh }) {
  const [students, setStudents] = useState([]);

  const load = async () => {
    const res = await API.get("");
    setStudents(res.data);
  };

  useEffect(() => {
    load();
  }, [refresh]);

  const remove = async (id) => {
    await API.delete(`${id}`);
    load();
  };

  return (
    <div>
      <h2>Students</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => onEdit(s)}>Edit</button>
                <button onClick={() => remove(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;