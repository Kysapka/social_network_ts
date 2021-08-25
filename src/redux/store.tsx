
export type stateType = {
    profilePage: {
        posts: postsDataType,
        newPostText: string

    },
    dialogsPage: {
        dialogs: dialogsDataType
        messages: messageDataType
    }
}
export type postsDataType = postType[]
type postType = {
    id: string
    message: string
    likesCount: number
}
export type dialogsDataType = dialogsDataItemType[]
type dialogsDataItemType = {
    id: string,
    name: string
}
export type messageDataType = messageType[]
type messageType = {
    id: string
    message: string
}

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void

}

export const store:storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, haw are you?', likesCount: 2},
                {id: '1', message: 'This is my first post', likesCount: 8}
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your it-kamasutra?'},
                {id: '3', message: 'I am fine'},
                {id: '4', message: 'I am happy'},
                {id: '5', message: 'Yo'},
                {id: '6', message: 'Yo Yo Yo'},
            ],
            dialogs: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrew'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Victor'},
                {id: '6', name: 'Valera'},
            ]
        }
    },
    getState() {
      return this._state
    },
    _callSubscriber() {
        console.log("APP RENDERING")
    },
    addPost() {
        let newPost = {
            id: '7',
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}

// let state: stateType = {
//     profilePage: {
//         posts: [
//             {id: '1', message: 'Hi, haw are you?', likesCount: 2 },
//             {id: '1', message: 'This is my first post', likesCount: 8 }
//         ],
//         newPostText: "it-kamasutra"
//     },
//     dialogsPage: {
//         messages: [
//             {id: '1', message: 'Hi'},
//             {id: '2', message: 'How is your it-kamasutra?'},
//             {id: '3', message: 'I am fine'},
//             {id: '4', message: 'I am happy'},
//             {id: '5', message: 'Yo'},
//             {id: '6', message: 'Yo Yo Yo'},
//         ],
//         dialogs: [
//             {id: '1', name: 'Dimych'},
//             {id: '2', name: 'Andrew'},
//             {id: '3', name: 'Sveta'},
//             {id: '4', name: 'Sasha'},
//             {id: '5', name: 'Victor'},
//             {id: '6', name: 'Valera'},
//         ]
//     }
// }

// export const addPost =() => {
//     let newPost = {
//         id: '7',
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }

// window.store =  store;