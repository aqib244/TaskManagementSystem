import React, { useEffect, useState } from "react";

const Tasks = ({ user }) => {
  const [taskCounts, setTaskCounts] = useState(user.taskCount);

  useEffect(() => {
    const updateTaskCounts = () => {
      const updatedUser = JSON.parse(localStorage.getItem("loggedInUser"))?.data;
      if (updatedUser) {
        setTaskCounts({ ...updatedUser.taskCount });
      }
    };

    
    const interval = setInterval(updateTaskCounts, 500);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex px-10 py-3 justify-between gap-6 ">
      <div className="w-[40%] p-10 rounded-lg bg-blue-400">
        <h2 className="font-bold text-2xl">{taskCounts.newTask}</h2>
        <h3 className="text-xl font-bold">New Task</h3>
      </div>
      <div className="w-[40%] p-10 rounded-lg bg-green-500">
        <h2 className="font-bold text-2xl">{taskCounts.completed}</h2>
        <h3 className="text-xl font-bold">Completed</h3>
      </div>
      <div className="w-[40%] p-10 rounded-lg bg-amber-300">
        <h2 className="font-bold text-2xl">{taskCounts.active}</h2>
        <h3 className="text-xl font-bold">Active</h3>
      </div>
      <div className="w-[40%] p-10 rounded-lg bg-red-500">
        <h2 className="font-bold text-2xl">{taskCounts.failed}</h2>
        <h3 className="text-xl font-bold">Failed</h3>
      </div>
    </div>
  );
};

export default Tasks;
