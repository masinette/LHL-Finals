import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import axios from "axios";

import { useProfileVisual } from "../../hooks/useProfileVisual"
import CreateListingsBtn from "./CreateListingsBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoEditCard from "./ProfileInfoEditCard";
import ProfileImage from "./ProfileImage";
import { useUserData } from "../../hooks/useUserData";

const SHOW = "SHOW";
const EDIT = "EDIT";


export default function ProfileView(props) {
  const { state } = useUserData();
  console.log(state);
  const {user, setUser} = useContext(UserContext)
  // const [userData, setUserData] = useState({
  //   id: user.id,
  //   firstname: user[1],
  //   lastname: user[2],
  //   description: user[7],
  //   address: user[5],
  //   level: user[4],
  //  })
  // const [userData, setUserData] = useState({
  //   currentUser: {}
  //  })

  const { mode, transition, back } = useProfileVisual("SHOW");
  
  console.log(user);

  // useEffect(() => {
  //   const currentUserData = `/api/users/${user[0]}`;
  //   const interestsData = `/api/interests`;
  //   const userInterestsData = `/api/user_interests/${user[0]}`;

  //   Promise.all([
  //     axios.get(currentUserData),
  //   ])
  //     .then(all => {
  //       console.log(all[0].data)
  //       setUserData(prev => ({
  //         ...prev,
  //         currentUser: all[0].data
  //       }))
  //     })
  //     .catch(err => console.error("axios Error:", err))

  // }, [currentUser])
  
  
  return (
    <>
      <ProfileImage user_id={user.id} />
      { mode === SHOW && <ProfileInfoCard user={user === "empty" ? "" : user} onEdit={() => transition(EDIT)} />}
      { mode === EDIT && <ProfileInfoEditCard setUser={setUser} user={user === "empty" ? "" : user} onSubmit={() => transition(SHOW)} onCancel={() => back()} />}
      <CreateListingsBtn />
    </>
  )
}