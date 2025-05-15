import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 800 });
let students = [
  { id: 1, name: 'Alice',   email: 'alice@example.com',   course: 'Biology' },
  { id: 2, name: 'Bob',     email: 'bob@example.com',     course: 'Math' },
  { id: 3, name: 'Charlie', email: 'charlie@school.edu',  course: 'History' },
];

mock.onGet('/students').reply(200, students);

mock.onPost('/students').reply(config => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [201, newStudent];
});

export default axios;
