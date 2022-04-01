import classes from "./Post.module.css";

function Post(props){
    return(
        <div className={classes.post}>
            <div className={classes.avatar}>

            </div>
            <div className={classes.item}>
                <p>{props.likes} likes: {props.text}</p>
            </div>
        </div>
    )
}
export default Post;