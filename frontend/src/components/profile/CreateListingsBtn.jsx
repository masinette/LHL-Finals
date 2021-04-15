import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function CreateListingsBtn(props) {

  return (
    <>
      <Link to="/listings/new" className="btn btn-primary" >Create New Listing</Link>
    </>
  )
}