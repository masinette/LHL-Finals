import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import axios from "axios";

import { useProfileVisual } from "../../hooks/useProfileVisual"
import CreateListingsBtn from "./CreateListingsBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoEditCard from "./ProfileInfoEditCard";
import ProfileImage from "./ProfileImage";
import ProfileListingConvos from "./ProfileListingConvos";

const SHOW = "SHOW";
const EDIT = "EDIT";


export default function ProfileView(props) {
  const {user, setUser} = useContext(UserContext)
  const [rooms, setRooms] = useState([]);
  const { mode, transition, back } = useProfileVisual("SHOW");
  


  useEffect(() => {
    const userRooms = `/api/users/rooms/${user.id}`
    const userMessages = `/api/messages/${user.id}`
    axios({
      method: "GET",
      url: userRooms
    })
      .then(results => {
        setRooms(results.data)
      })
      .catch(err => console.error("roomList error: ", err))
  }, [])

  const handleSwitch = (e) => {
    e.preventDefault();

  };

  console.log(user);
  
  return (
    <>
      <ProfileImage user_id={user.id} />
      { mode === SHOW && <ProfileInfoCard user={user === "empty" ? "" : user} onEdit={() => transition(EDIT)} />}
      { mode === EDIT && <ProfileInfoEditCard setUser={setUser} user={user === "empty" ? "" : user} onSubmit={() => transition(SHOW)} onCancel={() => back()} />}
      <ProfileListingConvos user_id={user.id} rooms={rooms} setRooms={setRooms} handleSwitch={handleSwitch} />
      <CreateListingsBtn />
    </>
  )
}