import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";


import CreateListingsBtn from "./CreateListingsBtn";
import EditProfileBtn from "./EditProfileBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileImage from "./ProfileImage";

export default function ProfileView(props) {
  const {user, setUser} = useContext(UserContext)

  console.log(user);
  
  
  return (
    <>
      <ProfileImage user_id={user[0]} />
      <ProfileInfoCard user={user} />
      <CreateListingsBtn />
      <EditProfileBtn user_id={user[0]} />
    </>
  )
}