import {AppStateType} from '../../redux/rootStore'
import {Dialogs} from './Dialogs'
import {DialogsPageType, sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {withAuthRedirect} from "../hoc/withRedirect";


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    onChangeHandler: (value: string) => void
    sendNewMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }

}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateNewMessageBodyAC(value))
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageAC())
        }

    }
}
let withAuthRedirectDialogs = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectDialogs)