import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Student Registered:', student);
    setIsRegistered(true);
  };

  return (
    <div>
      {!isRegistered ? (
        <form onSubmit={handleSubmit}>
            <h2>Register Student</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={student.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={student.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={student.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={student.class}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={student.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={student.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>Class: {student.class}</p>
          <p>Address: {student.address}</p>
          <p>Phone: {student.phone}</p>
          <Link to="/students">Back to Student List</Link>
        </div>
      )}
    </div>
  );
}

export default RegisterStudent;
