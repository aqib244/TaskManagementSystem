import React from 'react'
import Header from './Header'
import CreateTask from './admin_components/CreateTask'
import AllTasks from './admin_components/AllTasks'
import Tasks from './emp_components/Tasks'
import TaskList from './emp_components/TaskList'
 
const Admin = ({user ,changeUser}) => {


  
  
  return (

    <div>
      <Header changeUser={changeUser} user={user}/>
      <CreateTask>


 <AllTasks/>


     </CreateTask>

   
      
    </div>
  )
}

export default Admin
