import profileReducer, {addPostActionCreator, postChangeActionCreator} from "./profileReducer";


it("new post text should be changed", () => {
    // 1. test data
    let initialState = {
        posts: [
            {id: 1, text: "Hello props!", likes: 93},
            {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
        ],
        newPostText: "",
        profile: null,
        status: "",
    };

    // 2. action
    const action = postChangeActionCreator("hello tests!")
    const newState = profileReducer(initialState, action);

    // 3. exprectation
    expect(newState.newPostText).toBe("hello tests!");
})