import React from 'react'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {DialogsPropsType} from './DialogsContainer'

import {FormMessage} from "./Message/FormMessage";

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

export const Dialogs = React.memo((props: DialogsPropsType) => {

    const useGridClasses = useGridStyles();

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message id={m.id} message={m.message}/>)

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
                    <FormMessage messageBody={props.dialogsPage.newMessageBody}
                                 sendMessage={props.sendNewMessageAC}
                    />
                </Grid>
            </Grid>
        </div>
    )
})


