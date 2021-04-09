// import logo from './logo.svg';
import './App.css';
import useApplicationData from "./hooks/useApplicationData"

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <div>
      <h1>Hello Seattle!</h1>
    </div>
  )};

export default App;
