import {combineReducers} from 'redux';

const rootScreen = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return Object.assign({}, state, {
        userInfo: action.data
      });
    
    default:
      return state;
  }
};


export default combineReducers({
  rootScreen
});
