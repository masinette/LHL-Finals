import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";

import { useProfileVisual } from "../../hooks/useProfileVisual"
import CreateListingsBtn from "./CreateListingsBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoEditCard from "./ProfileInfoEditCard";
import ProfileImage from "./ProfileImage";

const SHOW = "SHOW";
const EDIT = "EDIT";


export default function ProfileView(props) {
  const {user, setUser} = useContext(UserContext)
  const [userData, setUserData] = useState({
    id: user[0],
    firstname: user[1],
    lastname: user[2],
    description: user[7],
    address: user[5],
    level: user[4],
   })

  const { mode, transition, back } = useProfileVisual("SHOW");
  
  console.log(user);

  useEffect(() => {
    const userData = `/api/users/${user[0]}`;
    const interestsData = `/api/interests`;
    const userInterestsData = `/api/user_interests`;
  }, [userData])
  
  
  return (
    <>
      <ProfileImage user_id={user[0]} />
      { mode === SHOW && <ProfileInfoCard user={user === "empty" ? "" : userData} onEdit={() => transition(EDIT)} />}
      { mode === EDIT && <ProfileInfoEditCard setUserData={setUserData} user={user === "empty" ? "" : userData} onSubmit={() => transition(SHOW)} onCancel={() => back()} />}
      <CreateListingsBtn />
    </>
  )
}