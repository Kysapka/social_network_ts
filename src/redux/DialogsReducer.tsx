import {ActionTypes, dialogsDataType, messageDataType} from "./store";

const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


type DialogsReducerType = (action: ActionTypes, state: DialogsPageType) => DialogsPageType
type DialogsPageType = {
    dialogs: dialogsDataType
    messages: messageDataType
    newMessageBody: string
}
export type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>

export const DialogsReducer = (action: ActionTypes, state: DialogsPageType) => {
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
