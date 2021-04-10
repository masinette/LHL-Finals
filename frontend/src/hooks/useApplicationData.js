import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_MESSAGES,
  SET_CITIES,
  SET_ROOMS
} from '../helpers/dataReducer';
import axios from 'axios';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    messages: [],
    cities: [],
    rooms: [],
    loading: true,
  });

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: '/api/users',
  //   })
  //   .then(({
  //     data
  //   }) => {
  //     console.log(data);
  //     dispatch({
  //       type: SET_USERS,
  //       users: data
  //     });
  //   })
  //   .catch((err) => console.log(err));
  // }, []);


  useEffect(() => {
    
    axios({
      method: 'GET',
      url: '/api/users'
    })
    .then(({
      data
    }) => {
      console.log("USERS DATA",data);
      dispatch({
        type: SET_USERS,
        users: data
      });
    })
    .catch((err) => console.log(err));

    axios({
      method: 'GET',
      url: '/api/messages'
    })
    .then(({
      data
    }) => {
      console.log("MESSAGES DATA",data);
      dispatch({
        type: SET_MESSAGES,
        messages: data
      });
    })
    .catch((err) => console.log(err));

    axios({
      method: 'GET',
      url: '/api/cities'
    })
    .then(({
      data
    }) => {
      console.log("CITIES DATA",data);
      dispatch({
        type: SET_CITIES,
        cities: data
      });
    })
    .catch((err) => console.log(err));

    axios({
      method: 'GET',
      url: '/api/rooms'
    })
    .then(({
      data
    }) => {
      console.log("ROOMS DATA",data);
      dispatch({
        type: SET_ROOMS,
        rooms: data
      });
    })
    .catch((err) => console.log(err));

  }, []);







    // Promise.all([
// axios.all([axios.get(`api/users`),
//            axios.get(`api/messages`),
//            axios.get(`api/cities`)])
      // axios.get(url: 'api/users')
      // axios.get('api/messages'),
      // axios.get('api/cities'),
    // ])
  //   .then(({
  //     data
  //   }) => {
  //     console.log(data);
  //     dispatch({
  //       type: SET_USERS,
  //       users: data
  //     });
  //   })
  //   .catch((err) => console.log(err))
  // }, []);



  return {
    state,
    dispatch,
  };
}
 
