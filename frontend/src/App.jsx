// import logo from './logo.svg';
import { React, useState, useContext, Redirect, Link } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationData from "./hooks/useApplicationData";

import Messages from "./components/messages/MessagesList";
import RoommatesByCity from "./components/roommates/RoommatesByCity";
import RoommateCard from "./components/roommates/RoommateCard";
import RoomsByCity from "./components/rooms/RoomsByCity";
import RoomCard from "./components/rooms/RoomCard";


import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { NavigationTest, FooterTest, HomeTest, AboutTest, LoginTest, MessagesTest, SignUp } from "./components";

import NewRoomForm from './components/rooms/NewRoomForm';
import EditRoomForm from './components/rooms/EditRoomForm';
import axios from 'axios';
import { UserContext } from './UserContext'
import MessagesList from './components/messages/MessagesList';
import Convo from './components/messages/Convo';

// import { Container} from 'react-bootstrap';


const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

// if user is not logged in, display login page
  const [user, setUser] = useState("empty");

  //   const userList = state.users.map((user) => (<li key={user.id} > {user.firstname} {user.lastname} | {user.email} {user.is_owner} {user.level}</li>));
  //   const roomList = state.rooms.map((room) => (<li key={room.id}> {room.title} {room.description} {room.price}</li>));
  //  const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));


  return (
    
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{user, setUser}}>
            <NavigationTest />
            <Route path="/about" exact component={() => <AboutTest />} />
            <Route path="/login" exact component={() => <LoginTest users={state.users} />} />
            <Route path="/signup" exact component={() => <SignUp users={state.users} />} />
            <Route path="/search/roommates" exact component={() => <RoommatesByCity users={state.users} cities={state.cities}/>} /> 
            <Route path="/search/roommates/:user_id" exact component={() => <RoommateCard users={state.users} cities={state.cities}/>} /> 
            <Route path="/messages/:user_id" exact component={() => <MessagesList users={state.users} messages={state.messages}/>} /> 
            <Route path="/messages/:user_id/:interl_id" exact component={() => <Convo users={state.users} messages={state.messages}/>} /> 


            <Route path="/search/rooms" exact component={() => <RoomsByCity users={state.users} cities={state.cities} rooms={state.rooms}/>} /> 
            <Route path="/search/rooms/:room_id" exact component={() => <RoomCard users={state.users} cities={state.cities} rooms={state.rooms} />} /> 

   
            <Route path="/listings/new" exact component={() => <NewRoomForm />} />
            <Route path="/listings/edit/:roomId" component={() => <EditRoomForm />} />

            <Route path="/messages" exact component={() => <MessagesTest messages={state.messages} />} />
            <Route path="/" exact component={() => <HomeTest cities={state.cities} />} />
          </UserContext.Provider>
        </Switch>

        <FooterTest />
      </Router>
    </div>
  );







//     return (
//     <div className="App" >

// {/* 
//       <h1> Users </h1>
//       <ul> {userList} </ul>

//       <h1> Messages </h1>
//       <ul> {messageList} </ul> */}
//       <TopNav />
//       <Hero />
//       <Container>
//           <CityCards cities={state.cities} />
//       </Container>

//       {/* <h1> Cities </h1> */}
//       {/* {cityList}  */}

// {/* 
//       <h1> Rooms </h1>
//       <ul> {roomList} </ul> */}

// {/* 
//     <Messages />
//     <Users userList/>  */}


//   </div >
//   )
  };

export default App;
