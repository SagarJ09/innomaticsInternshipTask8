import { Link } from 'react-router-dom';
import StudentList from '../pages/StudentList';
import StudentDetails from '../pages/StudentDetails';
import contact from './contact';

function Navbar() {
  return (
    
    <nav>

                < a class="navbar-brand" href="#">
                 </a>
                <span class="navbar-toggler-icon"></span>
      <Link to="/">Home</Link>
      <Link to="/">Dashboard</Link>
      <Link to="/students">Student List</Link>
      <Link to="/students/register">Student Register</Link>
      <Link to="/components/contact">Contact</Link>


      
    </nav>
  );
}

export default Navbar;
