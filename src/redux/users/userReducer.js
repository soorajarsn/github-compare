import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./userConsts";

const initialState = {
  users: [],
  loading: false,
  error: "",
};
const isAlreadyPresent = (currentUsers, newUser) => {
  for (const user of currentUsers) {
    if (user.id === newUser.id) return true;
  }
  return false;
};
const placeAtProperPlace = (currentUsers, newUser) => {
  if (!isAlreadyPresent(currentUsers, newUser)) {
    const weight = (newUser.followers + newUser.public_repos) / 2;
    newUser.weight = weight;
    let position = 0;
    for (var i = 0; i < currentUsers.length; i++)
      if (currentUsers[i].weight > weight) position++;
      else break;
    currentUsers.splice(position, 0, newUser);
  }
  return currentUsers;
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return { ...state, loading: true };
    case LOAD_USER_SUCCESS:
      let newUsers = placeAtProperPlace(state.users.slice(), action.payload);
      return { loading: false, error: "", users: newUsers };
    case LOAD_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
