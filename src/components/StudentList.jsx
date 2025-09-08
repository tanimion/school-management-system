import React, { useEffect, useState } from "react";
import Storyblok from "../storyblok";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await Storyblok.get("cdn/stories", {
        starts_with: "students/",
      });
      console.log("Students response:", res.data.stories);
      setStudents(res.data.stories);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-2">Students</h2>
      <h4 className="text-xl font-normal mb-6">
        <b>Total:</b> {students.length}
      </h4>
      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => {
            const data = student.content.body?.[0] || {};
            return (
              <div
                key={student.id}
                className="p-4 border rounded-xl bg-gray-50 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {data.name || "No Name"}
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  {data.email || "N/A"}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Class:</span>{" "}
                  {data.class || "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentList;