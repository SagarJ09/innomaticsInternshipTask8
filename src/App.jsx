import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import StudentDetails from './pages/StudentDetails';
import { StudentProvider } from './context/StudentContext';
import contact from './components/contact';
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
          <Route path="/contact" element={<contact />} />

        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
