import React from "react";
import Layout from "../components/Layout";
import StudentList from "../components/StudentList";

const Students = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <StudentList />
    </Layout>
  );
};

export default Students;