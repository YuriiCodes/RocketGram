import {addPostActionCreator, postChangeActionCreator} from "../../../data/profileReducer";
import PostsList from "./PostsList";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// function PostsListContainer(props) {
//     return (<StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let newPostText = state.profilePage.newPostText;
//                 let posts = state.profilePage.posts;
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator()).bind(props.store)
//                 }
//                 let updateNewPostText = (text) => {
//                     store.dispatch(postChangeActionCreator(text));
//                 }
//                 return (<PostsList addPost={addPost} updateNewPostText={updateNewPostText} posts={posts}
//                                    newPostText={newPostText}/>)
//             }}
//         </StoreContext.Consumer>)
// }

function PostsListContainer2(props) {
    return (<StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let newPostText = state.profilePage.newPostText;
            let posts = state.profilePage.posts;

            let addPost = () => {
                store.dispatch(addPostActionCreator()).bind(props.store)
            }
            let updateNewPostText = (text) => {
                store.dispatch(postChangeActionCreator(text));
            }
            return (<PostsList addPost={addPost} updateNewPostText={updateNewPostText} posts={posts}
                               newPostText={newPostText}/>)
        }}
    </StoreContext.Consumer>)
}

let mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText, posts: state.profilePage.posts,
});

let dispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(addPostActionCreator())
    }, updateNewPostText: (text) => {
        dispatch(postChangeActionCreator(text));
    }
})
let PostsListContainer = connect(mapStateToProps, dispatchToProps)(PostsList);
export default PostsListContainer;
