/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import { GETTING, SUCCESS, FAILURE } from '../actions/index';

const initialState = {
  smurfs: [],
  getting: false,
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING:
      return {
        ...state,
        smurfs: [],
        getting: true, 
      }

    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        getting: false
      }

    case FAILURE:
      return {
        ...state,
        getting: false,
        error: action.payload
      }

      default:
        return state;
  }
}

export default rootReducer;