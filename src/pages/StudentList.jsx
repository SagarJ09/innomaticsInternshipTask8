import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentTable from '../components/StudentTable';

function StudentList() {
  const { students } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default StudentList;
