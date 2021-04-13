import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }){
  //get currentUser and track it in state
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    //use firebase method to create user
    return auth.createUserWithEmailandPassword(email, password)
  }

//only run when component is mounted, and only run once ([])
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    //set to current user (or null)
    setCurrentUser(user)
  })

  return unsubscribe
}, [])

  const value = {
    currentUser
  }

  return (
    //get currentUser and return it, so it can be used anywhere in the application
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}