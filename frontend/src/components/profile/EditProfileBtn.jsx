import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function EditProfileBtn(props) {
  
  return (
    <>
      <Link to="/profile/:profileId/edit" className="btn btn-primary" >Edit Profile</Link>
    </>
  )
}
