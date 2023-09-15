import {combineReducers} from 'redux';
import {registerReducer, photoReducer, authReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  authReducer,
  
});

export default reducer;
