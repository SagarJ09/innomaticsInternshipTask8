import React from 'react';

const Dashboard = ({ totalStudents }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Students: {totalStudents}</p>
    </div>
  );
};

export default Dashboard;