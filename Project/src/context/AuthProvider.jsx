import React, { createContext, useEffect, useState } from "react"
import {
  getLocalStorage,
  setLocalStorage
} from "../utils/LocalStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Agar localStorage me data nahi hai tabhi initial data save karo
    if (!localStorage.getItem("employees")) {
      setLocalStorage()
    }

    if (!localStorage.getItem("admin")) {
      setLocalStorage()
    }

    // LocalStorage se data lo
    const { employees, admin } = getLocalStorage()

    setUserData({
      employees,
      admin
    })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
