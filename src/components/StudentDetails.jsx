import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function StudentDetails({ students }) {
  const { id } = useParams()
  const nav = useNavigate()
  const student = students.find(s => s.id === +id)

  if (!student) {
    return <p className="p-4">Student not found.</p>
  }

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-2">{student.name}</h1>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <button
        onClick={() => nav(-1)}
        className="mt-4 underline"
      >
        ← Back
      </button>
    </div>
  )
}
