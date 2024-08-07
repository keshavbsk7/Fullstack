import React, { useState } from 'react';
import MarkDetails from './MarkDetails';

const StudentMarks = () => {
  const [studentData, setStudentData] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', marks: ['', '', ''] });

  const handleInputChange = (index, event) => {
    const updatedMarks = [...newStudent.marks];
    updatedMarks[index] = event.target.value;
    setNewStudent({ ...newStudent, marks: updatedMarks });
  };

  const handleNameChange = (event) => {
    setNewStudent({ ...newStudent, name: event.target.value });
  };

  const handleAddStudent = () => {
    setStudentData([...studentData, newStudent]);
    setNewStudent({ name: '', marks: ['', '', ''] });
  };

  return (
    <div>
      <h1>Student Mark Sheet</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={newStudent.name} onChange={handleNameChange} />
        <br />
        <label>Data Structure:</label>
        <input type="number" value={newStudent.marks[0]} onChange={(e) => handleInputChange(0, e)} />
        <br />
        <label>Algorithm:</label>
        <input type="number" value={newStudent.marks[1]} onChange={(e) => handleInputChange(1, e)} />
        <br />
        <label>Full Stack:</label>
        <input type="number" value={newStudent.marks[2]} onChange={(e) => handleInputChange(2, e)} />
        <br />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <MarkDetails studentMarks={studentData} />
    </div>
  );
};

export default StudentMarks;
