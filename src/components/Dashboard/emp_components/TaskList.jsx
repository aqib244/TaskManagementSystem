import React, { useState } from "react";
import { useEffect } from "react";
const TaskList = ({ user }) => {
  const tasks = JSON.parse(localStorage.getItem("employees"));

  const [active, setActive] = useState(null);
  const [completed , setCompleted] = useState(null);
  const [failed , setFailed] = useState(null);
  const handleAccept = () => {
    const add_active_task = tasks.map((e) => {
      if (e.name === user.name) {
        e.taskCount.active = e.taskCount.active + 1;

        user.taskCount.active = user.taskCount.active + 1;
        if (user.taskCount.newTask > 0 && e.taskCount.newTask > 0) {
          e.taskCount.newTask = e.taskCount.newTask - 1;
          user.taskCount.newTask = user.taskCount.newTask - 1;
        }

        let found1 = false;
        user.tasks.map((task) => {
          if (task.status === "new" && !found1) {
            task.status = "active";
            found1 = true;
          }
          // console.log(task)
        });

        let found2 = false;
        e.tasks.map((task) => {
          if (task.status === "new" && !found2) {
            task.status = "active";
            found2 = true;
          }
        });

        // return  e
      }
      return e;
    });

    console.log(add_active_task);

    localStorage.setItem("employees", JSON.stringify(add_active_task));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", data: user })
    );

    //  const newD = JSON.parse(localStorage.getItem("employees"))

    setActive(add_active_task);
  };

  const handleCompleted = () => {
    const add_completed_task = tasks.map((e) => {
      if (user.name === e.name) {
        e.taskCount.completed = e.taskCount.completed + 1;

        user.taskCount.completed = user.taskCount.completed + 1;

        if (user.taskCount.active > 0 && e.taskCount.active > 0) {
          e.taskCount.active = e.taskCount.active - 1;
          user.taskCount.active = user.taskCount.active - 1;
        }

        let found1 = false
        user.tasks.map((task)=>{
         if(task.status === "active" && !found1){
        
        task.status = "completed"
          found1 = true
         }
    // console.log(task)
    
    
        })
    
        let found2 = false
        e.tasks.map((task)=>{
         if(task.status === "active" && !found2){
        
        task.status = "completed"
          found2 = true
         }
    
        })
      }
      return e;
    });

    console.log(add_completed_task)
    console.log(user)


    localStorage.setItem("employees", JSON.stringify(add_completed_task));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "user", data: user }))

      setCompleted(add_completed_task)
  };


  const handleFailed = ()=>{

  const add_failed_task = tasks.map((e)=>{

    if(e.name === user.name){
      e.taskCount.failed = e.taskCount.failed + 1;

      user.taskCount.failed = user.taskCount.failed + 1;

      if (user.taskCount.active > 0 && e.taskCount.active > 0) {
        e.taskCount.active = e.taskCount.active - 1;
        user.taskCount.active = user.taskCount.active - 1;
      }
    
      let found1 = false
      user.tasks.map((task)=>{
       if(task.status === "active" && !found1){
      
      task.status = "failed"
        found1 = true
       }
  // console.log(task)
  
  
      })
  
      let found2 = false
      e.tasks.map((task)=>{
       if(task.status === "active" && !found2){
      
      task.status = "failed"
        found2 = true
       }
  
      })

      
      
    }
return e

  })
  console.log(add_failed_task);

  localStorage.setItem("employees", JSON.stringify(add_failed_task));
  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ role: "user", data: user })
  );

  //  const newD = JSON.parse(localStorage.getItem("employees"))

  setFailed(add_failed_task);
    }
  
  useEffect(() => {
    console.log("Task Activated");
  }, [active]);
  useEffect(() => {
    console.log("Task Completed");
  }, [completed]);


  return (
    <div className="px-10 py-3 ">
      <h1 className="text-2xl font-bold">Tasks List</h1>
      <div className="h-[500px] overflow-auto mt-3">
        {user.tasks.map((e, id) => {
          // Agar task active hai to show krny k liye
          if (e.status === "active") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {e.category}
                  </h3>
                  <h4 className="text-xl">{e.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div className="flex mt-5 gap-6">
                  <button onClick={handleCompleted} className="cursor-pointer bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                    Mark Completed
                  </button>
                  <button onClick={handleFailed} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Mark Failed
                  </button>
                </div>
              </div>
            );
          }

          // Agar task complete ho chuka hai to  show krny k liye
          if (e.status === "completed") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {e.category}
                  </h3>
                  <h4 className="text-xl">{e.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div className="mt-5">
                  <span className="bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 rounded">
                    Completed
                  </span>
                </div>
              </div>
            );
          }

          // Agar task fail ho chuka hai to isko show krny k liye
          if (e.status === "failed") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {e.category}
                  </h3>
                  <h4 className="text-xl">{e.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div className="mt-5">
                  <span className="bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 rounded">
                    Failed
                  </span>
                </div>
              </div>
            );
          }

          // Agar task naya hai to show krna
          if (e.status === "new") {
            return (
              <div
                key={id}
                className="h-[18rem] bg-amber-400 p-7 mt-5 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl rounded bg-red-400 text-white py-1 px-3">
                    {e.category}
                  </h3>
                  <h4 className="text-xl">{e.date}</h4>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div>
                  <button
                    onClick={handleAccept}
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
