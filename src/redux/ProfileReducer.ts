const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export type postsDataType = postType[]
export type postType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: postsDataType,
    newPostText: string
}

export type ProfileReducerActionTypes = AddPostActionType | UpdateNewTextActionType
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>

const initProfileState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi, haw are you?', likesCount: 2},
        {id: '1', message: 'This is my first post', likesCount: 8}
    ],
    newPostText: "it-kamasutra"
}


export const ProfileReducer = (state: ProfilePageType = initProfileState, action: ProfileReducerActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '7',
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText : action.newText};

        default:
            return state;
    }

}
export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)