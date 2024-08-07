import React from 'react';
import './mark.css'

const MarkDetails = ({ studentMarks }) => {
  const calculateTotalMarks = (marks) => {
    return marks.reduce((total, mark) => total + parseInt(mark), 0);
  };

  return (
    <div className='tble'>
      <h2>Mark Sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Data Structure</th>
            <th>Algorithm</th>
            <th>Full Stack</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className='tbdy'>
          {studentMarks.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks[0]}</td>
              <td>{student.marks[1]}</td>
              <td>{student.marks[2]}</td>
              <td>{calculateTotalMarks(student.marks)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkDetails;
