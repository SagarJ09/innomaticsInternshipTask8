
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function StudentDetails() {
  const { id } = useParams();
  const { students } = useContext(StudentContext);

  const student = students.find((s) => s.id === parseInt(id, 10));

  if (!student) {
    return (
      <div>
        <h2>Student Not Found</h2>
        <p>The requested student does not exist.</p>
        <Link to="/students">Go back to Student List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
      <Link to="/students">Back to Student List</Link>
    </div>
  );
}

export default StudentDetails;
