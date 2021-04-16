import { useState, useEffect } from "react";
import axios from "axios";

export function useInterestsData() {

  const setUserInterests = (userId) => {
    const allInterests = "/api/interests"
    const userInterests = `/api/user_interests/${userId}`

    useEffect(() => {
      axios({
        method: "GET",
        url: allInterests
      })
      .then(res => {
        console.log(res.data)
        setInterests(res.data)
      })
    },[])
  }
  // TBD check backend query routes to see if its setup

  return {setUserInterests}
} 