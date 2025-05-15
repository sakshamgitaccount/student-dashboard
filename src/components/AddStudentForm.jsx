import React, { useState } from 'react'
import axios from '../api/mockApi'
import { useNavigate } from 'react-router-dom'

export default function AddStudentForm({ onAdd }) {
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
  const [course, setCourse] = useState('')
  const [error, setError]   = useState('')
  const nav = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!name || !email || !course) {
      return setError('All fields are required.')
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return setError('Invalid email.')
    }
    try {
      const res = await axios.post('/students', { name, email, course })
      onAdd(res.data)
      nav('/')
    } catch {
      setError('Failed to add student.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 border rounded">
      {error && <p className="text-red-600">{error}</p>}
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="block w-full p-2 border rounded"
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="block w-full p-2 border rounded"
      />
      <input
        placeholder="Course"
        value={course}
        onChange={e => setCourse(e.target.value)}
        className="block w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded"
      >
        Add Student
      </button>
    </form>
  )
}
