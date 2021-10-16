import {AppStateType} from '../../redux/rootStore'
import {Dialogs} from './Dialogs'
import {DialogsPageType, sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'
import {compose} from 'redux'
import {Dispatch} from 'redux'
import {withAuthRedirect} from "../hoc/withRedirect";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    onChangeHandler: (value: string) => void
    sendNewMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
// let withAuthRedirectDialogs = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectDialogs)

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)