const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export type DialogsReducerActionTypes =
     SendNewMessageActionType
    | updateNewMessageBodyType

type DialogsReducerType = (state: DialogsPageType, action: DialogsReducerActionTypes) => DialogsPageType


export type DialogsPageType = {
    dialogs: dialogsDataType
    messages: messageDataType
    newMessageBody: string
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

export type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>

const initDialogsState:DialogsPageType =  {
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'I am fine'},
        {id: '4', message: 'I am happy'},
        {id: '5', message: 'Yo'},
        {id: '6', message: 'Yo Yo Yo'},
    ],
        newMessageBody: '',
        dialogs: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrew'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'},
    ]
}

export const DialogsReducer:DialogsReducerType = (state= initDialogsState, action):DialogsPageType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newBodyMessage = state.newMessageBody
            state.messages.push({id: '6', message: newBodyMessage})
            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state;
        default:
            return state;
    }
}
export const sendNewMessageAC = () => ({type: SEND_NEW_MESSAGE} as const)
export const updateNewMessageBodyAC = (newMessageBody: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody
} as const)
