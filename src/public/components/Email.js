import React, {useState} from 'react';
import {connect} from "react-redux";
import {sendEmail} from '../actions/emailAction'
import {emailValidation} from '../utils/validators'
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form'


const Email = (props) => {
    const [state, setState] = useState(
        {
            selectedOption:"",
            from:"",
            password:"",
            to:"",
            subject:"",
            body:"",
        }
    );
    const [isValidate, setValidation] = useState(
        {
            from:false,
            to:false,
        }
    );
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        if(target.type === 'radio'){
            setState({
                ...state,
                [e.target.name]: e.target.value
            });
        }
        else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            });
            if(e.target.name=='from' || e.target.name=='to'){
               let isValid= emailValidation(e.target.value);
                setValidation({
                    ...isValidate,
                    [e.target.name]: isValid
                });
            }
        }

    };
    //
    const onChangeHandlerQuill = (value,name) => {
        state[name] = value;
        setState({ ...state});
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(state
            && state.selectedOption
            && state.from && state.password
            && state.to
            && isValidate.from
            && isValidate.to){
            //
            state.body=`
            <div id="eMail">
                ${state.body}
                <p>Thanks and Regards</p>
            </div>
            `
            props.sendEmail(state).then(success=>{
                toast.success("Email Send Successfully !!!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            },error=>{
                toast.error("Ops Something Went Wrong !!!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
        }

    };

    return (
        <React.Fragment>
            <Form
                state={state}
                submitted={submitted}
                isValidate={isValidate}
                onChange={handleChange}
                onChangeHandlerQuill={onChangeHandlerQuill}
                onClick={submitHandler}
            />
            <ToastContainer />
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        emailInfo: state.email
    }
}
const mapDispatchToProps = dispatch => ({
    sendEmail(data) {
        return dispatch(sendEmail(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);