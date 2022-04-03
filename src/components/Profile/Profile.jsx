import classes from "./Profile.module.css";
import PostsList from "./PostsList/PostsList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <PostsListContainer store={props.store}/>
        </div>
    )
}

export default Profile;