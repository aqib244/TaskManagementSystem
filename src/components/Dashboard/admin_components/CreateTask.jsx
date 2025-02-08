import React, { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const updateContext = createContext();

const CreateTask = ({ children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from localStorage
    const storedData = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedData);
  }, []);

  const submitHandle = () => {
   

    const Task = {
      title,
      description,
      status: "new",
      category,
      date,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.name === assignTo) {
        employee.tasks.push(Task);
        employee.taskCount.newTask += 1;
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("loggedInUser", JSON.stringify(updatedEmployees));

    reset(); // Reset form after submission
  };

  return (
    <updateContext.Provider value={employees}>
      <div>
        <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col p-10 gap-6">
          {/* Title Field */}
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            className="border border-black rounded p-4 outline-none"
            placeholder="Enter Title"
          />
          {errors.title && <small className="text-red-600">{errors.title.message}</small>}

          {/* Description Field */}
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 10, message: "Description must be at least 10 characters" },
            })}
            className="border border-black rounded p-4 outline-none"
            placeholder="Description"
            cols={30}
            rows={5}
          />
          {errors.description && <small className="text-red-600">{errors.description.message}</small>}

          {/* Date Field */}
          <input
            {...register("date", { required: "Date is required" })}
            type="date"
            className="border border-black rounded p-4 outline-none"
          />
          {errors.date && <small className="text-red-600">{errors.date.message}</small>}

          {/* Assign To - Select Field */}
          <select
            {...register("assignTo", { required: "Please assign this task to someone" })}
            className="border border-black rounded p-4 outline-none"
          >
            <option value="">Select Employee</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
          {errors.assignTo && <small className="text-red-600">{errors.assignTo.message}</small>}

          {/* Category Field */}
          <input
            {...register("category", { required: "Category is required" })}
            type="text"
            className="border border-black rounded p-4 outline-none"
            placeholder="Category"
          />
          {errors.category && <small className="text-red-600">{errors.category.message}</small>}

          <button type="submit" className="font-bold py-4 cursor-pointer bg-amber-300">
            Create Task
          </button>
        </form>
      </div>
      {children}
    </updateContext.Provider>
  );
};

export default CreateTask;


