import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../store/slices/instructorSlice";
import "../styles/Instructors.css"; // Import CSS file

const Instructors = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.instructors);

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="title">Instructors</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to fetch instructors</p>}
      <ul className="instructor-list">
        {list.map((inst) => (
          <li key={inst._id} className="instructor-item">
            {inst.name} - {inst.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instructors;
