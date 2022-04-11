import Header from "./Header";
import React from "react";
import {authThunkCreator, setAuthData} from "../../data/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        console.log(this.props);
        return (
            <Header isAuth={this.props.isAuth} id={this.props.id} login={this.props.login} email={this.props.email}/>
        )
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});


export default connect(mapStateToProps, {
    setAuthData, auth: authThunkCreator
})(HeaderContainer);