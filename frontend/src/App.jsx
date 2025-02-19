import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Instructors from "./pages/Instructors";
import Courses from "./pages/Courses";
import "./styles/Navbar.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Instructors</Link>
          <Link to="/courses">Courses</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Instructors />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
