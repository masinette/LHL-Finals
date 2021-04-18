import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";

import "./ProfileInterests.scss"

export default function ProfileInterests(props) {
  const [interests, setInterests] = useState([])
  const user_id = props.user_id

  const myInterestsPath = `/api/user_interests/${user_id}`
  useEffect(() => {
    axios({
      method: "GET",
      url: myInterestsPath
    })
      .then(results => {
        console.log(results)
        setInterests(results.data)
      })
      .catch(err => console.error("Interests error: ", err))
  }, [])
  const interestList = interests.map((interest, index) => (
    <Badge pill variant="info" key={index} >
      {interest.name}
    </Badge>
  ))

  return (
    <>
      <h4 className="profile__card" >
        { interestList }
        {/* <EditInterestsForm /> */}
      </h4>

    </>
  )
}