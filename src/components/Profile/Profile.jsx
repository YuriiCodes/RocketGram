import classes from "./Profile.module.css";
import PostsList from "./PostsList/PostsList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            {/*<PostsList posts={props.state.posts}  dispatch={props.dispatch} newPostText={props.state.newPostText} />*/}
            <PostsListContainer store={props.store}/>
        </div>
    )
}

export default Profile;