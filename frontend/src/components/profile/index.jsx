import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import CreateListingsBtn from "./CreateListingsBtn";
import EditProfileBtn from "./EditProfileBtn";

export default function ProfileView(props) {
  
  return (
    <>
    
      <CreateListingsBtn />
      <EditProfileBtn />
    </>
  )
}