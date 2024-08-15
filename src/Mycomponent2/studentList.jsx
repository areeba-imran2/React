import React from "react";

const students = [
  { id: 1, name: 'Ali', score: 85 },
  { id: 2, name: 'Eman', score: 92 },
  { id: 3, name: 'Hassan', score: 78 },
  { id: 4, name: 'Anum', score: 88 }
];

export function StudentList() {
  const studentElements = [];

  students.forEach(student => {
    studentElements.push(
      <div key={student.id}>
        <h3>{student.name}</h3>
        <p>Score: {student.score}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Student List</h2>
      {studentElements}
    </div>
  );
}

export default StudentList;
