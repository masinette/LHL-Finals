import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";


import CreateListingsBtn from "./CreateListingsBtn";
import EditProfileBtn from "./EditProfileBtn";
import ProfileImage from "./ProfileImage";
import ProfileInfoEditCard from "./ProfileInfoEditCard";

export default function EditProfileForm(props) {
  const {user, setUser} = useContext(UserContext)
  
  // const [currentUser, setCurrentUser] = useState({

  // })

  console.log(user);

  // useEffect(() => {

  // }, [currentUser])
  
  
  return (
    <>
      <ProfileImage user_id={user.id} />
      <ProfileInfoEditCard user={user} />
      <CreateListingsBtn />
    </>
  )
}