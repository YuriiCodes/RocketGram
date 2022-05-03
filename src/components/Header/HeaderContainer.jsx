import Header from "./Header";
import React from "react";
import {logoutThunkCreator, setAuthData} from "../../data/authReducer";
import {connect} from "react-redux";

function HeaderContainer(props) {
    return (
        <Header isAuth={props.isAuth} id={props.id}
                login={props.login} email={props.email}
                logout={props.logout}
        />
    )
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});


export default connect(mapStateToProps, {
    setAuthData, logout: logoutThunkCreator
})(HeaderContainer);