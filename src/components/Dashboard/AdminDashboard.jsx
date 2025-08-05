import React from "react";
import Header from "../UI/Header";
import CreateTask from "../UI/CreateTask";
import AllTask from "../UI/AllTask";


const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-gray-700">
      <Header />
      <CreateTask />
      <AllTask/>


      
    </div>
  );
};

export default AdminDashboard;
