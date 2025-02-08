import React, { createContext, useState } from 'react'
import { get_data, set_data } from '../utils/localStorage'
import { useEffect } from 'react'
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {

  const [userData , setUserData] = useState(null)
  
  useEffect(() => {
   
const data = get_data()



  const isDataEmpty = Object.values(data).every((value)=> {if(value === null){
    return true
  }});

if(data === null || isDataEmpty){
  set_data()
  const data = get_data()
  setUserData(data)

}
setUserData(data)

 
  
  
 }, [])
 
  return (
    <div>
     <AuthContext.Provider value={userData}>
{children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

