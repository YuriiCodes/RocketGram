import Header from "./Header";
import React from "react";
import {setAuthData} from "../../data/authReducer";
import {connect} from "react-redux";
import axios from "axios";
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(res => {
            if( res.data.resultCode === 0 ) {
                this.props.setAuthData(res.data.data.id,res.data.data.login, res.data.data.email);
            }
        })
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
    setAuthData
})(HeaderContainer);