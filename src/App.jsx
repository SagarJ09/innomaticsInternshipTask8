import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import StudentDetails from './pages/StudentDetails';
import { StudentProvider } from './context/StudentContext';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
