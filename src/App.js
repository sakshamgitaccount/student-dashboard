import React, { useEffect, useState } from 'react';
import axios from './api/mockApi';
import StudentFilter from './components/StudentFilter';
import StudentList from './components/StudentList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddStudentForm from './components/AddStudentForm';
import ProtectedRoute from './components/ProtectedRoute';
import StudentDetails from './components/StudentDetails';
import LoginForm from './components/LoginForm';

function App() {
  const [students, setStudents] = useState([]);
  const [filterCourse, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/students')
      .then(res => setStudents(res.data))
      .finally(() => setLoading(false));
  }, []);

  // append a newly added student into state
  const handleAdd = newStudent => {
    setStudents(prev => [...prev, newStudent]);
  };

  const courses = ['All', ...new Set(students.map(s => s.course))];

  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <nav className="space-x-4">
            <Link
              to="/add"
              className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Add Student
            </Link>
            {/* you could hide this link if not logged in by checking `user` */}
          </nav>
        </div>
      </header>

      <main className="p-4 container mx-auto">
        {loading
          ? <p>Loading…</p>
          : <>
            <StudentFilter
              courses={courses}
              selected={filterCourse}
              onFilter={setFilter}
            />
            <StudentList
              students={students}
              filterCourse={filterCourse}
            />
          </>
        }

        {/* render login/logout controls */}
        <LoginForm />

        <Routes>
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddStudentForm onAdd={handleAdd} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
          {/* your dashboard route (`/`) is already rendered above */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
