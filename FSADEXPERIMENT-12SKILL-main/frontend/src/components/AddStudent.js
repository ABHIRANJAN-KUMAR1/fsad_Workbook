import React, { useState, useEffect } from "react";
import API from "../services/api";

function AddStudent({ selected, refresh }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (selected) setStudent(selected);
  }, [selected]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (student.id) {
      await API.put(`/${student.id}`, student);
    } else {
      await API.post("", student);
    }

    setStudent({ name: "", email: "", course: "" });
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" />
      <button type="submit">{student.id ? "Update" : "Add"}</button>
    </form>
  );
}

export default AddStudent;
