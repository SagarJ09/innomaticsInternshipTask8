import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://dpaste.com/DBQS4CGRZ.txt'); // Use /raw to get plain JSON
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchStudents();
  }, []);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((s) => (s.id === id ? updatedStudent : s))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
