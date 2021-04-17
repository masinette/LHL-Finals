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
import ProfileInterests from "./ProfileInterests"

import "./styles.scss"

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

  console.log(rooms)

  const handleSwitch = (index) => (e) => {
    e.preventDefault();
    const target = e.target;
    const roomValueId = target.value;
    console.log(target.checked);
    const checked = target.checked ? false : true;
    console.log(checked);
    const updatePath = `/api/rooms/${roomValueId}`;
    console.log(e.target)
    console.log(e.target.value)
    // console.log(rooms)
    // console.log(rooms[roomValueId - 1])
    const roomData = {
      [target.name]: checked 
    }
    
    console.log(roomData);
    axios({
      method: "PUT",
      url: updatePath,
      data: roomData
    })
      .then(results => {
        console.log(results);
        setRooms(rooms => {
          const newList = rooms.map((room, j) => {
          if (index === j) {
            console.log(room)
            return {...room,
              [target.name]: checked
            }
          } else {
            return room
          }
        })
        console.log(newList);
        return newList
      })
    })
    .catch(err => console.error("Put error:", err))
  };

  console.log(user);
  
  return (
    <>
      <div className="profile">
        <div className="profile__info" >
          <ProfileImage user_id={user.id} />
          <h4>My Interests</h4>
          <ProfileInterests user_id={user.id} />
          <h4>My Details</h4>
          { mode === SHOW && <ProfileInfoCard user={user === "empty" ? "" : user} onEdit={() => transition(EDIT)} />}
          { mode === EDIT && <ProfileInfoEditCard setUser={setUser} user={user === "empty" ? "" : user} onSubmit={() => transition(SHOW)} onCancel={() => back()} />}
        </div>

        {user.is_owner && <div className="profile__listings" >
          <h3>
            My Listings
            <span className="right">
              <CreateListingsBtn />
            </span>
          </h3>
          <ProfileListingConvos user_id={user.id} rooms={rooms} setRooms={setRooms} handleSwitch={handleSwitch} />

        </div>}

        {!user.is_owner && <div className="profile__listings" >
          <h3>
            My Inquiries
            {/* <span className="right">
              <CreateListingsBtn />
            </span> */}
          </h3>
          {/* <ProfileListingConvos user_id={user.id} rooms={rooms} setRooms={setRooms} handleSwitch={handleSwitch} /> */}

        </div>}
        
      </div>
    </>
  )
}