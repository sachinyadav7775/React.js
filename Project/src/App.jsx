import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const  authData = useContext(AuthContext)

  const handleLogin = (email,password) => {
    if(email == 'admin@sky1.com' && password == '1234') {
      setUser('admin')
    }else if (email == 'user@sky2.com' && password == '12345'){
      setUser('employee')
    }
    else{
      alert("Invalid User")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App