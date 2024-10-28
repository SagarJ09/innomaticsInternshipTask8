import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function StudentTable({ students }) {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.class}</td>
            <td>
              <Link to={`/students/${student.id}`}>View</Link>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
