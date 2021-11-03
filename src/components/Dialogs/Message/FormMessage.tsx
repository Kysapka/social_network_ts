import {useFormik} from "formik";
import Stack from "@mui/material/Stack";
import {Button, TextField} from "@material-ui/core";
import React from "react";

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