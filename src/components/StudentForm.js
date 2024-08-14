import React, { useState, useEffect } from "react";
import './StudentForm.css';

const StudentForm = ({ selectedStudent, onSave, onCancel }) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    username: "",
    gender: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.firstName || !student.lastName || !student.username || !student.gender || !student.dateOfBirth) {
      alert("Please fill in all fields");
      return;
    }
    onSave(student);
    setStudent({
      firstName: "",
      lastName: "",
      username: "",
      gender: "",
      dateOfBirth: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{selectedStudent ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            value={student.firstName}
            onChange={handleChange}
            aria-label="First Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            value={student.lastName}
            onChange={handleChange}
            aria-label="Last Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={student.username}
            onChange={handleChange}
            aria-label="Username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            aria-label="Gender"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
            aria-label="Date of Birth"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {selectedStudent ? "Update" : "Add"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
