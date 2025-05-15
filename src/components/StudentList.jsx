import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentList({ students, filterCourse }) {
  const displayed = filterCourse === 'All'
    ? students
    : students.filter(s => s.course === filterCourse);

  if (!displayed.length) return <p>No students found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayed.map(s => (
        <div key={s.id} className="p-4 border rounded shadow">
          <h2 className="font-semibold">{s.name}</h2>
          <p>{s.email}</p>
          <p className="italic">{s.course}</p>
          <Link to={`/students/${s.id}`} className="text-blue-500 underline">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
