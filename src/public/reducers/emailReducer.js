import {
  ADD_EMAIL_SUCCESS,
  SEND_EMAIL_SUCCESS,
  GET_EMAIL_ERROR,
} from '../actions/emailAction'

const initialState = {
  inProgress: false,
  email: null,
  error: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_SUCCESS:
      return { inProgress:true, error:null};
    case SEND_EMAIL_SUCCESS:
      return { email:action.email, inProgress:false, error:null};
    case GET_EMAIL_ERROR:
      return { inProgress:false, error:true};
    default:
      return state
  }
}
