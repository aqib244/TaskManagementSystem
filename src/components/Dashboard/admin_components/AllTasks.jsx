import React, { useContext, useEffect, useState } from 'react';
import { updateContext } from './CreateTask';

const AllTasks = () => {
  const [employees, setEmployees] = useState([]);

  //  Component mount hone par employees localStorage se load karna
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const updatedData = useContext(updateContext);

  //  Jab bhi updatedData change ho, employees ko update karna
  useEffect(() => {
    if (updatedData) {
      setEmployees(updatedData);
    }
  }, [updatedData]);

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold">All Tasks</h1>

      {/*  Table Header */}
      <div className="flex justify-between w-full bg-amber-300">
        <h1 className="px-4 w-1/5 py-3 text-lg font-bold">Employee Name</h1>
        <h1 className="px-4 w-1/5 py-3 text-lg font-bold">New Tasks</h1>
        <h1 className="px-4 w-1/5 py-3 text-lg font-bold">Active Tasks</h1>
        <h1 className="px-4 w-1/5 py-3 text-lg font-bold">Completed Tasks</h1>
        <h1 className="px-4 w-1/5 py-3 text-lg font-bold">Failed Tasks</h1>
      </div>

      {/*  Employees Data Render */}
      {employees.map((employee, index) => (
        <div key={index} className="flex justify-between w-full bg-green-500">
          <h1 className="px-4 w-1/5 py-3 text-lg">{employee.name}</h1>
          <h1 className="px-4 w-1/5 py-3 text-lg">{employee.taskCount.newTask}</h1>
          <h1 className="px-4 w-1/5 py-3 text-lg">{employee.taskCount.active}</h1>
          <h1 className="px-4 w-1/5 py-3 text-lg">{employee.taskCount.completed}</h1>
          <h1 className="px-4 w-1/5 py-3 text-lg">{employee.taskCount.failed}</h1>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
