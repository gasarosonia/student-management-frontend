import React from "react";
import "./StudentList.css"; 

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Student List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.username}</td>
                <td>{student.gender}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.age}</td>
                <td className="action-buttons">
                  <button
                    className="btn btn-edit"
                    onClick={() => onEdit(student)}
                    aria-label={`Edit ${student.username}`}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(student.id)}
                    aria-label={`Delete ${student.username}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
