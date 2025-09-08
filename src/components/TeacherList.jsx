import React, { useEffect, useState } from "react";
import Storyblok from "../storyblok";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await Storyblok.get("cdn/stories", {
        starts_with: "teachers/",
      });
      setTeachers(res.data.stories);
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-2">Teachers</h2>
      <h4 className="text-xl font-normal mb-6">
        <b>Total:</b> {teachers.length}
      </h4>
      {teachers.length === 0 ? (
        <p className="text-gray-500">No teachers found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => {
            const data = teacher.content.body?.[0] || {};
            return (
              <div
                key={teacher.id}
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
                  <span className="font-medium">Subject:</span>{" "}
                  {data.subject || "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeacherList;