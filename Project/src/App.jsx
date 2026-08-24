import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  // Page refresh ke baad login restore karo
  useEffect(() => {
    if (!authData) return

    const loggedInUser = localStorage.getItem("loggedInUser")

    if (!loggedInUser) return

    const data = JSON.parse(loggedInUser)

    setUser(data.role)

    // Agar employee login tha
    if (data.role === "employee") {
      const employee = authData.employees.find(
        (employee) => employee.id === data.id
      )

      if (employee) {
        setLoggedInUserData(employee)
      } else {
        localStorage.removeItem("loggedInUser")
        setUser(null)
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    // Admin login
    if (
      email === "admin@sky.com" &&
      password === "1234"
    ) {
      setUser("admin")

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      )

      return
    }

    // Employee login
    if (authData) {
      const employee = authData.employees.find(
        (employee) =>
          employee.email === email &&
          employee.password === password
      )

      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            id: employee.id
          })
        )

        return
      }
    }

    // Invalid login
    alert("Invalid email or password")
  }

  return (
    <>
      {!user && (
        <Login handleLogin={handleLogin} />
      )}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  )
}

export default App