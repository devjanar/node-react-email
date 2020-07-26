import React,{useState,useEffect} from 'react'
import Email from './components/Email'
import {connect} from "react-redux";


const App = (props) => {
    return (
        <React.Fragment>
            <Email/>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        state: state
    }
}

export default connect(mapStateToProps)(App);