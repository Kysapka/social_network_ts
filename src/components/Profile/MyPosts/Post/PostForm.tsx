import {useFormik} from "formik";
import Stack from "@mui/material/Stack";
import {Button, TextField} from "@material-ui/core";
import React from "react";

type PostFromPropsType = {
    addPost: (newPostText: string) => void
}

export const PostForm = (props: PostFromPropsType) => {

    type initialValuesType = {
        newPostText: string
    }

    type postErrorsFormType = {
        newPostText?: string
    }

    const formik = useFormik<initialValuesType>({
        initialValues: {
            newPostText: ''
        },
        onSubmit: (values) => {
            props.addPost(values.newPostText)
        },
        validate: (values) => {
            const errors: postErrorsFormType = {};
            if (values.newPostText.length > 15) {
                errors.newPostText = "max length 30"
            }
            return errors
        }
    })

    return <>
        <Stack direction="row" spacing={2}>
            <form onSubmit={formik.handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    id={"newPostText"}
                    name={"newPostText"}
                    label={"enter your post text"}
                    variant="outlined"
                    margin={"normal"}
                    value={formik.values.newPostText}
                    onChange={formik.handleChange}
                    error={!!formik.errors.newPostText}
                    helperText={formik.errors.newPostText}
                />

                <Button size="large" variant="contained" color="primary"
                        type={"submit"}
                        style={{marginLeft: 10, verticalAlign: "center"}}
                >
                    Send post
                </Button>
            </form>
        </Stack>
    </>
}