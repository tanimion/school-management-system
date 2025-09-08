import React from "react";
import Sidebar from "../components/Sidebar";
import StudentList from "../components/StudentList";
import TeacherList from "../components/TeacherList";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 bg-gray-800 text-white" />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <StudentList />
        <br />
        <TeacherList />
      </main>
    </div>
  );
};

export default Dashboard;