// import logo from './logo.svg';
import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationData from "./hooks/useApplicationData";

import CityCards from "./components/cities/CityCards";
import Messages from "./components/messages/MessagesList";
import Users from "./components/users/users";
import TopNav from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"


import { Container} from 'react-bootstrap';


const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

    const userList = state.users.map((user) => (<li key={user.id} > {user.firstname} {user.lastname} | {user.email} {user.is_owner} {user.level}</li>));
    const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));
    const roomList = state.rooms.map((room) => (<li key={room.id}> {room.title} {room.description} {room.price}</li>));

    return (
    <div className="App" >

{/* 
      <h1> Users </h1>
      <ul> {userList} </ul>

      <h1> Messages </h1>
      <ul> {messageList} </ul> */}
      <TopNav />
      <Hero />
      <Container>
          <CityCards cities={state.cities} />
      </Container>

      {/* <h1> Cities </h1> */}
      {/* {cityList}  */}

{/* 
      <h1> Rooms </h1>
      <ul> {roomList} </ul> */}

{/* 
    <Messages />
    <Users userList/>  */}


  </div >
  )};

export default App;
