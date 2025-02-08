import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import Admin from "./components/Dashboard/Admin";
import Employee from "./components/Dashboard/Employee";
import { AuthContext } from "./context/AuthProvider";











function App() {

  const [data, set_data] = useState({})
  const data1 = useContext(AuthContext);
  const emp = JSON.parse(localStorage.getItem("employees"))
 const adm  = JSON.parse(localStorage.getItem("admin"))
  const data2 =  {emp , adm} 
  
  const [user, setUser] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
console.log(data2)
  const handleLogin = (email, password) => {
    if (data2) {
      const admin = data2.adm.find((e) => email === e.email && password === e.password);
      if (admin) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }));
        setUser("admin"); 
         setLoggedInUser(admin);
        return;
      }

      const employee = data2.emp.find((e) => email === e.email && password === e.password);
      if (employee) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data: employee }));
         setUser("user"); 
        setLoggedInUser(employee);
        return;
      }
    }

    alert("Invalid Credentials");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData.role); 
      setLoggedInUser(userData.data);
    }
  }, []);

  useEffect(() => {
   console.log("user updated : ", loggedInUser )
  }, [loggedInUser])
  

  return (
  
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <Admin changeUser={setUser} user={loggedInUser} />}
      {user === "user" && <Employee data={data} changeUser={setUser} user={loggedInUser} />}
    </div>

  );
}

export default App
