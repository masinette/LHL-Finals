// import logo from './logo.svg';
import { React, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationData from "./hooks/useApplicationData";

import firebase from "firebase/app";
import "firebase/auth";

import Messages from "./components/messages/MessagesList";
import Users from "./components/users/Users";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationTest, FooterTest, HomeTest, AboutTest, LoginTest, MessagesTest, SignUp } from "./components";


// import { Container} from 'react-bootstrap';


const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

// if user is not logged in, display login page
  const [token, setToken] = useState();
  if(!token) {
    <LoginTest users={state.users} setToken={setToken} />
  }


  //   const userList = state.users.map((user) => (<li key={user.id} > {user.firstname} {user.lastname} | {user.email} {user.is_owner} {user.level}</li>));
  //   const roomList = state.rooms.map((room) => (<li key={room.id}> {room.title} {room.description} {room.price}</li>));
  //  const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));


  return (
    
    <div className="App">
      <Router>
        <NavigationTest />
        <Switch>
          <Route path="/" exact component={() => <HomeTest cities={state.cities} />} />
          <Route path="/about" exact component={() => <AboutTest />} />
          <Route path="/login" exact component={() => <LoginTest users={state.users} />} />
          <Route path="/signup" exact component={() => <SignUp users={state.users} />} />
          <Route path="/users" exact component={() => <Users users={state.users} cities={state.cities}/>} />
          {/* <Route path="/users/:userId" exact component={() => <Users users={state.users} cities={state.cities}/>} /> */}

          <Route path="/messages" exact component={() => <MessagesTest messages={state.messages} />} />
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
