import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function StudentForm({ onClose }) {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
