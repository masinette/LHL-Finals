import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function EditProfileBtn(props) {
  const user_id = props.user_id;
  const editRoute = `/profile/${user_id}/edit`

  return (
    <>
      <Link to={editRoute} className="btn btn-primary" >Edit Profile</Link>
    </>
  )
}
