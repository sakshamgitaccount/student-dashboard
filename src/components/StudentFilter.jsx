import React from 'react';

export default function StudentFilter({ courses, selected, onFilter }) {
  return (
    <label className="block mb-4">
      Filter by course:
      <select
        value={selected}
        onChange={e => onFilter(e.target.value)}
        className="ml-2 p-1 border rounded"
      >
        {courses.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </label>
  );
}
