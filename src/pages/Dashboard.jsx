import React from "react";
import Layout from "../components/Layout";
import StudentList from "../components/StudentList";
import TeacherList from "../components/TeacherList";

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <StudentList />
      <br />
      <TeacherList />
    </Layout>
  );
};

export default Dashboard;