import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/slices/courseSlice";
import "../styles/Courses.css"; // Import CSS file

const Courses = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="title">Courses</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to fetch courses</p>}
      <ul className="course-list">
        {list.map((course) => (
          <li key={course._id} className="course-item">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
