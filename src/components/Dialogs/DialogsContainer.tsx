import {AppStateType} from '../../redux/rootStore'
import {Dialogs} from './Dialogs'
import {sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'
import {compose} from 'redux'

import {withAuthRedirect} from "../hoc/withRedirect";
import {connect, ConnectedProps} from "react-redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export type DialogsPropsType = ConnectedProps<typeof connectedComp>

const connectedComp = connect(mapStateToProps, {sendNewMessageAC})

export const DialogsContainer = compose<React.ComponentType>(
    connectedComp,
    withAuthRedirect
)(Dialogs)