import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/students">Student List</Link>
      <Link to="/students/register">Register Student</Link>
    </nav>
  );
}

export default Navbar;
