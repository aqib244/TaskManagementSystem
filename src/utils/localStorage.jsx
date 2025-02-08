const employees = [
  {
    id: 1,
    name: "Fahad",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 0,
      failed: 1,
    },
    tasks: [
      {
      
        status: "active",
        title: "Task 1",
        description: "Complete the monthly report",
        category: "Work", // New field
        date: "2023-10-15", // New field (can be creation date or due date)
      },
      {
        status: "completed",
        title: "Task 2",
        description: "Attend the team meeting",
        category: "Work",
        date: "2023-10-10",
      },
      {
       
        status: "active",
        title: "Task 3",
        description: "Start the new project",
        category: "Urgent",
        date: "2023-10-20",
      },
      {
        
        status: "failed",
        title: "Task 4",
        description: "Fix the critical bug",
        category: "Work",
        date: "2023-10-05",
      },
    ],
  },
  {
    id: 2,
    name: "Saad",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 0,
      failed: 1,
    },
    tasks: [
      {
      
        status: "active",
        title: "Task 1",
        description: "Complete the monthly report",
        category: "Work", // New field
        date: "2023-10-15", // New field (can be creation date or due date)
      },
      {
        status: "completed",
        title: "Task 2",
        description: "Attend the team meeting",
        category: "Work",
        date: "2023-10-10",
      },
      {
       
        status: "active",
        title: "Task 3",
        description: "Start the new project",
        category: "Urgent",
        date: "2023-10-20",
      },
      {
        
        status: "failed",
        title: "Task 4",
        description: "Fix the critical bug",
        category: "Work",
        date: "2023-10-05",
      },
    ],
  },

  
];

const admin = [
  {
    id: 6,
    name : "Saleem",
    email: "admin@example.com",
    password: "123",
  },
];

export const set_data = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const get_data = () => {
  const emp_data = localStorage.getItem("employees");

  const admin_data = localStorage.getItem("admin");

 const employees = JSON.parse(emp_data)
 const admin = JSON.parse(admin_data)
 return { employees , admin }
 
};
