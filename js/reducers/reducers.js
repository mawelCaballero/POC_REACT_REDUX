/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE, SET_METAMODEL_OBJECT, LOAD_PROPERTIES_FROM_RESOURCE,TRANSFORM_DATA_VIEW } from '../constants/AppConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
import auth from '../utils/auth';
import transform from '../utils/transform';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: ''
  },
  metadata: null,
  viewdata: null,
  properties: null,
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  errorMessage: ''
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
    console.log('Action-> CHANGE_FORM');
      return assign({}, state, {
        formState: action.newState
      });
      break;
    case SET_METAMODEL_OBJECT:
        var screenJsonModel = require('./../../metamodel/' + action.screenId + '.json');
        return assign({},state, {
          metadata: screenJsonModel
        });
        break;
    case LOAD_PROPERTIES_FROM_RESOURCE:
        return assign({},state, {
          properties: action.response
        });
    case TRANSFORM_DATA_VIEW:
        let transformedData;
        if (state.metadata && state.properties){
          return assign({},state, {
            viewdata: transform(state.metadata, state.properties)
          });
        }
        return assign({},state, {
        viewdata: transformedData
        });

    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      });
      break;
    case SENDING_REQUEST:
      return assign({}, state, {
        currentlySending: action.sending
      });
      break;
    case SET_ERROR_MESSAGE:
      return assign({}, state, {
        errorMessage: action.message
      });
    default:
      return state;
  }
}
