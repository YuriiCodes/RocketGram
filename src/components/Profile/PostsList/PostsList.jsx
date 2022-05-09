import classes from "./PostsList.css";
import Post from "./Post/Post";
import NewPostForm from "./newPostForm/newPostForm";
import {addPostActionCreator} from "../../../data/profileReducer";

function PostsList(props){
    let postsElements = props.posts.map(post =>  <Post likes = {post.likes} text={post.text}/>)

    console.log("PostsList rerender")
    return (
        <div className={classes.postsSection}>
            <NewPostForm updateNewPostText={props.updateNewPostText} addPost={props.addPost} newPostText={props.newPostText} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default PostsList;