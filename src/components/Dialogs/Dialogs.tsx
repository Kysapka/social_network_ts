import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Box, Container, Grid, makeStyles, Paper} from '@material-ui/core';
import {
    DialogsReducerActionTypes,
    DialogsPageType,
    sendNewMessageAC,
    updateNewMessageBodyAC
} from '../../redux/DialogsReducer'
import {Button, TextField} from '@material-ui/core'
import {AppStateType} from '../../redux/rootStore'
import {DialogsPropsType} from './DialogsContainer'


const useGridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: "grey"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));


export const Dialogs = (props: DialogsPropsType) => {

    const useGridClasses = useGridStyles();

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message id={m.id} message={m.message}/>)

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div className={useGridClasses.root}>

            <Grid container spacing={10}>
                <Grid item xs={3}>
                    <Paper style={{color: "chocolate"}}>
                        {dialogsElements}
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper style={{color: "chocolate"}}>
                        {messagesElements}
                    </Paper>
                </Grid>


                <Grid item xs={12}>

                    <TextField size="small" label="Enter your message" variant="outlined"
                               value={props.dialogsPage.newMessageBody} onChange={onChangeHandler}/>
                    <Button size="large" variant="contained" color="primary" onClick={props.sendNewMessage}
                            style={{marginLeft: 10}}>Send message</Button>

                </Grid>
            </Grid>

        </div>

    )
}
