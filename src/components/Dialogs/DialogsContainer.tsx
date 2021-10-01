import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Button, makeStyles, TextField} from '@material-ui/core'
import {AppStateType} from '../../redux/rootStore'
import {Dialogs} from './Dialogs'
import {DialogsPageType, sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    onChangeHandler: (value: string) => void
    sendNewMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateNewMessageBodyAC(value))
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageAC())
        }

    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)