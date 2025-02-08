import React, { createContext, useState, useEffect } from 'react'
import { get_data, set_data } from '../utils/localStorage'

// Context banaya gaya hai jo authentication data ko manage karega
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  
  // User data ko state mein store karna
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Local storage se data get karna
    const data = get_data()

    // Check karna agar data empty hai
    const isDataEmpty = Object.values(data).every((value) => {
      if (value === null) {
        return true
      }
    });

    // Agar data null ya empty ho to local storage ko update karna
    if (data === null || isDataEmpty) {
      set_data() // Default data set karna
      const data = get_data() // Phir se updated data lena
      setUserData(data) // State update karna
    }

    // Jo bhi data hai, usko state mein store karna
    setUserData(data)

  }, []) // Ye effect sirf ek dafa chalega component mount hone par
  
  return (
    <div>
      {/* Context Provider jo children components ko userData provide karega */}
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

