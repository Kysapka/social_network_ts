import {addMessageAC} from "../../../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../../../redux/store";
import {SendMessage} from "./SendMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type SendMessagePropsType = {
//     store: StoreType
// }

// export function SendMessageContainer1(props: SendMessagePropsType) {
//
//     const newMessage = props.store.getState().dialogsPage.newMessage
//
//     const onMessageSend = () => {
//         if (!newMessage.trim())  {
//             props.store.dispatch(newMessageTextAC(''))
//             return
//         }
//         props.store.dispatch(addMessageAC(newMessage.trim()))
//     }
//
//     const onMessageChange = (value: string) => {
//         props.store.dispatch(newMessageTextAC(value))
//     }
//
//     return ( <SendMessage newMessage={newMessage} onMessageSend={onMessageSend} onMessageChange={onMessageChange} /> )
// }

export type SendMessagePropsType2 = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
    onMessageSend: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {}
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onMessageSend: (newMessage: string) => {
            dispatch(addMessageAC(newMessage.trim()))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)

