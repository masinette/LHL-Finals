import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

import axios from "axios";

export function useUserData() {
  // Current logged in user[0]
  const {user, setUser} = useContext(UserContext)

  // user state
  const [state, setState] = useState({
    currentUser: {}
  })

  useEffect(() => {
    const currentUserData = `/api/users/${user.id}`;
    const interestsData = `/api/interests`;
    const userInterestsData = `/api/user_interests/${user.id}`;

    Promise.all([
      axios.get(currentUserData),
    ])
      .then(all => {
        console.log(all[0].data)
        setState(prev => ({
          ...prev,
          currentUser: all[0].data
        }))
      })
      .catch(err => console.error("axios Error:", err))

  }, [])

  // const setCurrentUser = () => {
  //   const currentUserData = `/api/users/${user[0]}`;
  //   useEffect(() => {
  //     axios.get(currentUserData)
  //       .then(result => {
  //         console.log(result.data);
  //         setState({...state, currentUser: result.data});
  //       })
  //       .catch(err => console.error("axios Error:", err))
  //     }, [])
  // }

  return { state }
}