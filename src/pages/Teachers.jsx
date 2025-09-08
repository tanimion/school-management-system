import React from "react";
import Layout from "../components/Layout";
import TeacherList from "../components/TeacherList";

const Teachers = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Teachers</h1>
      <TeacherList />
    </Layout>
  );
};

export default Teachers;