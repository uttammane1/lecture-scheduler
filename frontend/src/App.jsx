import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>
          <li><Link to="/instructor">Instructor Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
