import React, { useState, useEffect } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import axios from "axios";
import './App.css'; // Import the CSS file for styling

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/students/${id}`);
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  const handleSave = async (student) => {
    try {
      if (student.id) {
        const response = await axios.put(`http://localhost:8080/api/students/${student.id}`, student);
        setStudents(students.map(s => s.id === student.id ? response.data : s));
      } else {
        const response = await axios.post("http://localhost:8080/api/students", student);
        setStudents([...students, response.data]);
      }
      setSelectedStudent(null);
    } catch (error) {
      console.error("Error saving student", error);
    }
  };

  const handleCancel = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Student Management System</h1>
      <StudentForm
        selectedStudent={selectedStudent}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
