import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { updateContext } from './CreateTask';
import { use } from 'react';
// import { data } from 'autoprefixer';
const AllTasks = () => {
  const [employees, setEmployees] = useState([]);
  const data = localStorage.getItem("employees")

  useEffect(() => {
    // Load employees from localStorage when component mounts
    const data = localStorage.getItem("employees");
    if (data) {
      setEmployees(JSON.parse(data));
    }
  }, []);
  
  const up_data = useContext(updateContext)

  // const [ newD , setNewD ] = useState([])

  // setNewD(up_data)
  useEffect(() => {
  if(up_data){
    setEmployees(up_data)

  }

  }, [up_data]);



  return (
  
 <div className='px-10'>
  <h1 className='text-2xl font-bold'>All Tasks</h1>

 <div className='flex justify-between w-full bg-amber-300'>
        <h1 className='px-4 w-1/5 py-3 text-lg font-bold'>Employee Name</h1>
        <h1 className='px-4 w-1/5 py-3 text-lg font-bold'>New Task</h1>
        <h1 className='px-4 w-1/5 py-3 text-lg font-bold'>Active Task</h1>
        <h1 className='px-4 w-1/5 py-3 text-lg font-bold'>Completed Task</h1>
        <h1 className='px-4 w-1/5 py-3 text-lg font-bold'>Failed Task</h1>


 </div>
      
 {

employees.map((e , id)=>{

    return <div key={id} className='flex justify-between w-full bg-green-500'>
    <h1 className='px-4 w-1/5 py-3 text-lg'>{e.name}</h1>
    <h1 className='px-4 w-1/5 py-3 text-lg'>{e.taskCount.newTask}</h1>
    <h1 className='px-4 w-1/5 py-3  text-lg'>{e.taskCount.active}</h1>
    <h1 className='px-4 w-1/5 py-3  text-lg'>{e.taskCount.completed}</h1>
    <h1 className='px-4 w-1/5 py-3  text-lg'>{e.taskCount.failed}</h1>


</div>
    
  })
}




 </div>

    

  )
}

export default AllTasks
