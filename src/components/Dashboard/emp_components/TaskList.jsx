import React, { useState, useEffect } from "react";

const TaskList = ({ user }) => {
  const storedEmployees = JSON.parse(localStorage.getItem("employees")); // Employees ki list localStorage se la rahe hain

  const [activeTask, setActiveTask] = useState(null);
  const [completedTask, setCompletedTask] = useState(null);
  const [failedTask, setFailedTask] = useState(null);

  // Task ko "Active" status dene ka function
  const markTaskAsActive = () => {
    const updatedEmployees = storedEmployees.map((employee) => {
      if (employee.name === user.name) {
        employee.taskCount.active += 1;
        user.taskCount.active += 1;

        if (user.taskCount.newTask > 0 && employee.taskCount.newTask > 0) {
          employee.taskCount.newTask -= 1;
          user.taskCount.newTask -= 1;
        }

        let taskUpdated = false;
        user.tasks.forEach((task) => {
          if (task.status === "new" && !taskUpdated) {
            task.status = "active";
            taskUpdated = true;
          }
        });

        let employeeTaskUpdated = false;
        employee.tasks.forEach((task) => {
          if (task.status === "new" && !employeeTaskUpdated) {
            task.status = "active";
            employeeTaskUpdated = true;
          }
        });
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", data: user })
    );

    setActiveTask(updatedEmployees);
  };

  // Task ko "Completed" status dene ka function
  const markTaskAsCompleted = () => {
    const updatedEmployees = storedEmployees.map((employee) => {
      if (user.name === employee.name) {
        employee.taskCount.completed += 1;
        user.taskCount.completed += 1;

        if (user.taskCount.active > 0 && employee.taskCount.active > 0) {
          employee.taskCount.active -= 1;
          user.taskCount.active -= 1;
        }

        let taskUpdated = false;
        user.tasks.forEach((task) => {
          if (task.status === "active" && !taskUpdated) {
            task.status = "completed";
            taskUpdated = true;
          }
        });

        let employeeTaskUpdated = false;
        employee.tasks.forEach((task) => {
          if (task.status === "active" && !employeeTaskUpdated) {
            task.status = "completed";
            employeeTaskUpdated = true;
          }
        });
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", data: user })
    );

    setCompletedTask(updatedEmployees);
  };

  // Task ko "Failed" status dene ka function
  const markTaskAsFailed = () => {
    const updatedEmployees = storedEmployees.map((employee) => {
      if (employee.name === user.name) {
        employee.taskCount.failed += 1;
        user.taskCount.failed += 1;

        if (user.taskCount.active > 0 && employee.taskCount.active > 0) {
          employee.taskCount.active -= 1;
          user.taskCount.active -= 1;
        }

        let taskUpdated = false;
        user.tasks.forEach((task) => {
          if (task.status === "active" && !taskUpdated) {
            task.status = "failed";
            taskUpdated = true;
          }
        });

        let employeeTaskUpdated = false;
        employee.tasks.forEach((task) => {
          if (task.status === "active" && !employeeTaskUpdated) {
            task.status = "failed";
            employeeTaskUpdated = true;
          }
        });
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", data: user })
    );

    setFailedTask(updatedEmployees);
  };

  useEffect(() => {
    console.log("Task Active Hua");
  }, [activeTask]);

  useEffect(() => {
    console.log("Task Completed Hua");
  }, [completedTask]);

  return (
    <div className="px-10 py-3">
      <h1 className="text-2xl font-bold">Tasks List</h1>
      <div className="h-[500px] overflow-auto mt-3">
        {user.tasks.map((task, id) => {
          if (task.status === "active") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {task.category}
                  </h3>
                  <h4 className="text-xl">{task.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="flex mt-5 gap-6">
                  <button
                    onClick={markTaskAsCompleted}
                    className="cursor-pointer bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                  >
                    Mark Completed
                  </button>
                  <button
                    onClick={markTaskAsFailed}
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                  >
                    Mark Failed
                  </button>
                </div>
              </div>
            );
          }

          if (task.status === "completed") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {task.category}
                  </h3>
                  <h4 className="text-xl">{task.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="mt-5">
                  <span className="bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 rounded">
                    Completed
                  </span>
                </div>
              </div>
            );
          }

          if (task.status === "failed") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {task.category}
                  </h3>
                  <h4 className="text-xl">{task.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="mt-5">
                  <span className="bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 rounded">
                    Failed
                  </span>
                </div>
              </div>
            );
          }

          if (task.status === "new") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {task.category}
                  </h3>
                  <h4 className="text-xl">{task.date}</h4>
                </div>
                <div>
                  <button
                    onClick={markTaskAsActive}
                    className="mt-5 cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Accept Task
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
