import { combineReducers } from 'redux';
import property from './property';
import property_detail from './property';
// import errors from './errors';
// import messages from './messages';
import auth from './auth';

export default combineReducers({
  property,
  property_detail,
//   errors,
//   messages,
  auth,
});