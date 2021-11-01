import React from 'react'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Button, Grid, makeStyles, Paper, TextField} from '@material-ui/core';
import {DialogsPropsType} from './DialogsContainer'
import {Form, useFormik} from "formik";
import Stack from "@mui/material/Stack";

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
        .map(d => <DialogItem name={d.name} id={d.id}/>)
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

type FormMessagePropsType = {
    messageBody: string
    sendMessage: (value: string) => void
}

export const FormMessage = (props: FormMessagePropsType) => {

    type initialValuesType = {
        messageBody: string
    }

    type messageErrorsFormType = {
        messageBody?: string
    }

    const formik = useFormik<initialValuesType>({
        initialValues: {
            messageBody: ''
        },
        onSubmit: (values) => {
            props.sendMessage(values.messageBody)
        },
        validate: (values) => {
            const errors: messageErrorsFormType = {};
            if (values.messageBody.length > 15) {
                errors.messageBody = "max length 30"
            }
            return errors
        }
    })


    return <>
        <Stack direction="row" spacing={2}>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
            <TextField
                id={"messageBody"}
                name={"messageBody"}
                label={"enter your message"}
                variant="outlined"
                margin={"normal"}
                value={formik.values.messageBody}
                onChange={formik.handleChange}
                error={!!formik.errors.messageBody}
                helperText={formik.errors.messageBody}
            />

            <Button size="large" variant="contained" color="primary"
                    type={"submit"}
                    style={{marginLeft: 10, verticalAlign: "center"}}
            >
                Send message
            </Button>
        </form>
        </Stack>
    </>
}
