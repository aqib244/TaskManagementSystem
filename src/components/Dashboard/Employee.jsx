import React from 'react'
import Header from './Header'
import Tasks from './emp_components/Tasks'
import TaskList from './emp_components/TaskList'
// import { useState , useEffect} from 'react'

const Employee = ({user ,changeUser , data}) => {


  
  return (
    <div>
      <Header changeUser={changeUser} user = {user} />
      <Tasks user = {user} data={data}/>
      <TaskList  user = {user} data={data} />
    </div>
  )
}

export default Employee
