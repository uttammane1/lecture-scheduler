import InstructorForm from "../components/InstructorForm";
import CourseForm from "../components/CourseForm";
import ScheduleLecture from "../components/ScheduleLecture.jsx";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <InstructorForm />
      <CourseForm />
      <ScheduleLecture />
    </div>
  );
}

export default AdminDashboard;
