import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
// import UpdatedData from './context/updatedData.jsx'
// import updatedData from './context/updatedData.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>


 <App />





 
  



</AuthProvider>
    

   </StrictMode>,
)
