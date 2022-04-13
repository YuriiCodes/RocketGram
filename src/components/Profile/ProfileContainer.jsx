import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../data/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId;

        if(profileId === undefined){
            profileId = 23171;
        }
        this.props.getUserProfile(profileId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithRouterProfileContainer = withRouter(ProfileContainer);
let WithRouterAndAuthRedirectProfileContainer = WithAuthRedirect(WithRouterProfileContainer);
export default connect(mapStateToProps, {setUserProfile, getUserProfile: getUserProfileThunkCreator})(WithRouterAndAuthRedirectProfileContainer);