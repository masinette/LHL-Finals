import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

import { useProfileVisual } from "../../hooks/useProfileVisual"
import CreateListingsBtn from "./CreateListingsBtn";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoEditCard from "./ProfileInfoEditCard";
import ProfileImage from "./ProfileImage";
import ProfileInquiryConvos from "./ProfileInquiryConvos";
import ProfileListingConvos from "./ProfileListingConvos";
import ProfileInterests from "./ProfileInterests"

import "./styles.scss"

const SHOW = "SHOW";
const EDIT = "EDIT";


export default function ProfileView(props) {
  const {user, setUser} = useContext(UserContext)
  const [rooms, setRooms] = useState([]);
  const { mode, transition, back } = useProfileVisual("SHOW");
  
  const history = useHistory()
  if (!user.id) {
    history.push("/login");
  }

  useEffect(() => {
    const roomInquiryOrListings = user.is_owner ? `/api/users/rooms/${user.id}` : `/api/rooms/inquiry/${user.id}`
    // const userRooms = `/api/users/rooms/${user.id}`
    // const userMessages = `/api/messages/${user.id}`
    axios({
      method: "GET",
      url: roomInquiryOrListings
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
          <div className="profile__card-spacing">
            <h3>My Interests</h3>
            <ProfileInterests user_id={user.id} />
          </div>
          <div className="profile__card-spacing">
            <h3>My Details</h3>
              { mode === SHOW && <ProfileInfoCard user={user === "empty" ? "" : user} onEdit={() => transition(EDIT)} />}
              { mode === EDIT && <ProfileInfoEditCard setUser={setUser} user={user === "empty" ? "" : user} onSubmit={() => transition(SHOW)} onCancel={() => back()} />}
          </div>
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
            <span className="right">
              <Link to={`/messages/${user.id}`} className="btn btn-primary" >View Messages</Link>
            </span>
          </h3>
          <ProfileInquiryConvos user_id={user.id} rooms={rooms} />

        </div>}
        
      </div>
    </>
  )
}