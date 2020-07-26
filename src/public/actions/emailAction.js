import axios from "axios";


export const ADD_EMAIL_SUCCESS = 'ADD_EMAIL_SUCCESS';
function addEmailRequest() {
    return { type: ADD_EMAIL_SUCCESS }
}

export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const sendEmailSuccess = (email) => {
    return { type: SEND_EMAIL_SUCCESS, email }
};

export const GET_EMAIL_ERROR = 'GET_EMAIL_ERROR';
function getEmailError(error) {
    return { type: GET_EMAIL_ERROR, error }
}

export const sendEmail = (data) => {
    return  (dispatch) => {
        dispatch(addEmailRequest());
        const sendEmail= axios.post('/email',data);
        return Promise.resolve(sendEmail).then(
            sendEmail => {
                dispatch(sendEmailSuccess(sendEmail));
                return sendEmail;
            },
            error => {
                dispatch(getEmailError(error));
                throw error;
            }
        )
    }
};
