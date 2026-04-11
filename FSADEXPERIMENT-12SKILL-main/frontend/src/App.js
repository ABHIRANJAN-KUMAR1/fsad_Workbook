import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
    setSelected(null);
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <AddStudent selected={selected} refresh={reload} />
      <StudentList onEdit={setSelected} refresh={refresh} />
    </div>
  );
}

export default App;