// import logo from './logo.svg';
import './App.css';
import useApplicationData from "./hooks/useApplicationData"

import Messages from "./components/messages/MessagesList"
import Users from "./components/users/users"


const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

    const userList = state.users.map((user) => (<li key={user.id} > {user.firstname} {user.lastname} | {user.email} {user.is_owner} {user.level}</li>));
    const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));
    const cityList = state.cities.map((city) => (<li key={city.id}> {city.name} {city.longitude} {city.latitude}</li>));
    const roomList = state.rooms.map((room) => (<li key={room.id}> {room.title} {room.description} {room.price}</li>));

    return (
    <div className="App" >

      <h1> Users </h1>
      <ul> {userList} </ul>

      <h1> Messages </h1>
      <ul> {messageList} </ul>

      <h1> Cities </h1>
      <ul> {cityList} </ul>

      <h1> Rooms </h1>
      <ul> {roomList} </ul>

{/* 
    <Messages />
    <Users userList/>  */}


  </div >
  )};

export default App;
