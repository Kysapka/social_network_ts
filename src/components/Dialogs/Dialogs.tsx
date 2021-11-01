import React, {ChangeEvent} from 'react'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Button, Grid, makeStyles, Paper, TextField} from '@material-ui/core';
import {DialogsPropsType} from './DialogsContainer'
import {updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {useFormik} from "formik";

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
                                 updateMessage={props.updateNewMessageBodyAC}
                    />
                </Grid>
            </Grid>
        </div>
    )
})

type FormMessagePropsType = {
    messageBody: string
    sendMessage: () => void
    updateMessage: (value: string) => void
}



export const FormMessage = (props: FormMessagePropsType) => {

    type initialValuesType = {
        messageBody: string
    }

    const formik = useFormik({
        initialValues: {
            messageBody: 'xxx'
        },
        onSubmit: (values) => {console.log(JSON.stringify(values))}
    })

    return <>

        <form onSubmit={formik.handleSubmit}>

            <TextField
                id={"messageBody"}
                name={"messageBody"}
                label={"enter your message"}
                variant="outlined"
                margin={"normal"}
                value={formik.values.messageBody}
                // onChange={(event) => props.updateMessage(event.currentTarget.value)}
            />

            <Button size="large" variant="contained" color="primary"
                    type={"submit"}
                    // onClick={props.sendMessage}
                    // style={{marginLeft: 10}}

            >
                Send message
            </Button>

        </form>



        {/*<TextField size="small" label="Enter your message" variant="outlined"*/}
        {/*           value={props.messageBody}*/}
        {/*           onChange={(event) => props.updateMessage(event.currentTarget.value)}*/}
        {/*/>*/}
        {/*<Button size="large" variant="contained" color="primary"*/}
        {/*        onClick={props.sendMessage}*/}
        {/*        style={{marginLeft: 10}}>Send message</Button>*/}
    </>
}
