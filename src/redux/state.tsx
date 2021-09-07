// const ADD_POST = 'ADD_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
// const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

// export type stateType = {
//     profilePage: {
//         posts: postsDataType,
//         newPostText: string
//
//     },
//     dialogsPage: {
//         dialogs: dialogsDataType
//         messages: messageDataType
//         newMessageBody: string
//     }
// }
// export type postsDataType = postType[]
// type postType = {
//     id: string
//     message: string
//     likesCount: number
// }
// export type dialogsDataType = dialogsDataItemType[]
// type dialogsDataItemType = {
//     id: string,
//     name: string
// }
// export type messageDataType = messageType[]
// type messageType = {
//     id: string
//     message: string
// }
// export type ActionTypes =
//     AddPostActionType
//     | UpdateNewTextActionType
//     | SendNewMessageActionType
//     | updateNewMessageBodyType
// export type storeType = {
//     _callSubscriber: () => void
//     _subscribe: (observer: () => void) => void
//     getState: () => stateType
//     _state: stateType
//     dispatch: (action: ActionTypes) => void
//
// }
// export const state: storeType = {
//     _callSubscriber() {
//         console.log("APP RENDERING")
//     },
//     _subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: '1', message: 'Hi, haw are you?', likesCount: 2},
//                 {id: '1', message: 'This is my first post', likesCount: 8}
//             ],
//             newPostText: "it-kamasutra"
//         },
//         dialogsPage: {
//             messages: [
//                 {id: '1', message: 'Hi'},
//                 {id: '2', message: 'How is your it-kamasutra?'},
//                 {id: '3', message: 'I am fine'},
//                 {id: '4', message: 'I am happy'},
//                 {id: '5', message: 'Yo'},
//                 {id: '6', message: 'Yo Yo Yo'},
//             ],
//             newMessageBody: '',
//             dialogs: [
//                 {id: '1', name: 'Dimych'},
//                 {id: '2', name: 'Andrew'},
//                 {id: '3', name: 'Sveta'},
//                 {id: '4', name: 'Sasha'},
//                 {id: '5', name: 'Victor'},
//                 {id: '6', name: 'Valera'},
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//
//
//     dispatch(action) {
//
//         this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber();
//
//     }
// }
export default 1