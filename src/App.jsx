import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import Admin from "./components/Dashboard/Admin";
import Employee from "./components/Dashboard/Employee";
import { AuthContext } from "./context/AuthProvider";

function App() {
  // Local state jo user data store karega
  const [appData, setAppData] = useState({});

  // Auth context se data lena
  const authData = useContext(AuthContext);

  // Employees aur Admins ka data localStorage se lana
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admin"));

  // Employees aur Admins ka combined object banana
  const allUsers = { employees, admins };

  // Current logged-in user aur uski role store karna
  const [userRole, setUserRole] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  console.log(allUsers);

  // Login handle karne wala function
  const handleLogin = (email, password) => {
    if (allUsers) {
      // Admin check karna
      const admin = allUsers.admins?.find((e) => email === e.email && password === e.password);
      if (admin) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }));
        setUserRole("admin"); 
        setLoggedInUser(admin);
        return;
      }

      // Employee check karna
      const employee = allUsers.employees?.find((e) => email === e.email && password === e.password);
      if (employee) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data: employee }));
        setUserRole("user"); 
        setLoggedInUser(employee);
        return;
      }
    }

    // Agar koi bhi user match nahi karta to alert show karna
    alert("Invalid Credentials");
  };

  // Jab bhi page reload ho to user ka data localStorage se retrieve karna
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserRole(userData.role); 
      setLoggedInUser(userData.data);
    }
  }, []);

  // Jab bhi loggedInUser update ho to console mein log karna
  useEffect(() => {
    console.log("User Updated: ", loggedInUser);
  }, [loggedInUser]);

  return (
    <div>
      {/* Agar koi user login nahi hai to login component show karo */}
      {!userRole && <Login handleLogin={handleLogin} />}

      {/* Admin panel show karna agar admin logged in hai */}
      {userRole === "admin" && <Admin changeUser={setUserRole} user={loggedInUser} />}

      {/* Employee panel show karna agar user logged in hai */}
      {userRole === "user" && <Employee data={appData} changeUser={setUserRole} user={loggedInUser} />}
    </div>
  );
}

export default App;
