import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                setStatus={props.setStatus}
            />
            <PostsListContainer store={props.store}/>
        </div>
    )
}

export default Profile;