import React, { useEffect, useState } from "react";

const Tasks = ({ user }) => {
  // User ke task counts ko state mein store karna
  const [taskCounts, setTaskCounts] = useState(user.taskCount);

  useEffect(() => {
    const updateTaskCounts = () => {
      // LocalStorage se updated user ka data fetch karna
      const updatedUser = JSON.parse(localStorage.getItem("loggedInUser"))?.data;
      if (updatedUser) {
        setTaskCounts({ ...updatedUser.taskCount }); // Task counts update karna
      }
    };

    // Har 0.5s baad task count update hoga
    const interval = setInterval(updateTaskCounts, 500);

    return () => clearInterval(interval); // Component unmount hone par interval clear karna
  }, []);

  return (
    <div className="flex px-10 py-3 justify-between gap-6">
      {/* New Tasks ka card */}
      <div className="w-[40%] p-10 rounded-lg bg-blue-400">
        <h2 className="font-bold text-2xl">{taskCounts.newTask}</h2>
        <h3 className="text-xl font-bold">New Task</h3>
      </div>

      {/* Completed Tasks ka card */}
      <div className="w-[40%] p-10 rounded-lg bg-green-500">
        <h2 className="font-bold text-2xl">{taskCounts.completed}</h2>
        <h3 className="text-xl font-bold">Completed</h3>
      </div>

      {/* Active Tasks ka card */}
      <div className="w-[40%] p-10 rounded-lg bg-amber-300">
        <h2 className="font-bold text-2xl">{taskCounts.active}</h2>
        <h3 className="text-xl font-bold">Active</h3>
      </div>

      {/* Failed Tasks ka card */}
      <div className="w-[40%] p-10 rounded-lg bg-red-500">
        <h2 className="font-bold text-2xl">{taskCounts.failed}</h2>
        <h3 className="text-xl font-bold">Failed</h3>
      </div>
    </div>
  );
};

export default Tasks;
