import { useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function InstructorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE}/admin/add-instructor`, { name, email });
      alert("Instructor Added!");
      console.log("Success:", response.data);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding instructor:", error.response ? error.response.data : error.message);
      alert(`Error: ${error.response ? error.response.data.error : "Unknown error"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Instructor</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Add Instructor</button>
    </form>
  );
}

export default InstructorForm;
