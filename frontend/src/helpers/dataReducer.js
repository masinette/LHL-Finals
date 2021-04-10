export const SET_USERS = 'SET_USERS';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CITIES = 'SET_CITIES';
export const SET_ROOMS = 'SET_ROOMS';


const dataReducer = (state, action) => {
  // switch (action.type) {
  //   case SET_USERS:
  //     return {
  //       ...state,
  //       users: action.users,
  //       loading: false
  //     };
  //   default:
  //     return state;
  // }

  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
        loading: false
      };
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
        loading: false
      };
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
        loading: false
      };
      
    default:
      return state;
  }





};

export default dataReducer;