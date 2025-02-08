import React from 'react'

const Header = ({user ,changeUser}) => {
  const logout = ()=>{

    localStorage.setItem("loggedInUser" , "")
    
    changeUser('')

  }
  return (
    <div className='p-10 flex items-center justify-between'>
      <h1 className='text-3xl font-bold'>Hello {user.name} 👋</h1>
      <button onClick={logout} className='hover:text-white transition-all font-bold cursor-pointer hover:bg-black border border-black px-3 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
