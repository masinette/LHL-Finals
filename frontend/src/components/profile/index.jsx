import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";


import CreateListingsBtn from "./CreateListingsBtn";
import EditProfileBtn from "./EditProfileBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileImage from "./ProfileImage";

export default function ProfileView(props) {
  const {user, setUser} = useContext(UserContext)
  
  // const [currentUser, setCurrentUser] = useState({

  // })

  console.log(user);

  // useEffect(() => {

  // }, [currentUser])
  
  
  return (
    <>
      <ProfileImage user_id={user[0]} />
      <ProfileInfoCard user={user} />
      <CreateListingsBtn />
      <EditProfileBtn user_id={user[0]} />
    </>
  )
}