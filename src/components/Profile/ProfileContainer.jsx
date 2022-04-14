import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setStatusThunkCreator,
    setUserProfile
} from "../../data/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getStatus(23171);
        let profileId = this.props.router.params.profileId;
        if (profileId === undefined) {
            profileId = 23171;
        }
        this.props.getUserProfile(profileId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getUserProfile: getUserProfileThunkCreator, getStatus: getStatusThunkCreator,setStatus: setStatusThunkCreator})
)
(ProfileContainer);