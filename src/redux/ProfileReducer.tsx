import {ActionTypes, dialogsDataType, messageDataType, postsDataType, stateType} from "./store"

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


type ProfileReducerType = (action: ActionTypes, state: ProfilePageType) => ProfilePageType
type ProfilePageType = {
    posts: postsDataType,
    newPostText: string
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewTextActionType = ReturnType<typeof updateNewPostTextAC>


export const ProfileReducer: ProfileReducerType = (action, state) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '7',
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state;
    }

}
export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)