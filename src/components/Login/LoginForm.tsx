import React from "react";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Box, Button} from "@material-ui/core";
import {Checkbox, FormControlLabel} from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInput {
    email: string;
    password: string;
    rememberMe: boolean;
}

let schema = yup.object({
    email: yup.string().email('Enter a valid email').required('email is required'),
    password: yup.string().required('password is required'),
    rememberMe:yup.boolean().required('checkbox required'),
}).required();

export const LoginForm = () => {
    const {control, handleSubmit, formState: {errors, touchedFields}} = useForm<IFormInput>({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        console.log(touchedFields)
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} style={{margin: 20, textAlign: "center"}}>
            <Controller name={"email"} control={control}
                render={({field}) =>
                    <TextField {...field}
                               id={"email"} name={"email"} label="Enter your email"
                               error={Boolean(errors.email)}
                               helperText={errors.email?.message}
                               size="small" fullWidth margin="dense"
                              />}
            />

            <Controller name={"password"} control={control}
                render={({field}) =>
                    <TextField {...field}
                               id={"password"} name={"password"} label="Enter your password"
                               error={Boolean(errors.password)}
                               helperText={errors.password?.message}
                               type="password"  size="small" fullWidth margin="dense"
                               />}
            />

            <Controller name="rememberMe" control={control} defaultValue={false}
                render={({field}) =>
                    <FormControlLabel label="remember me" control={<Checkbox  {...field}/>} />}
            />
            <div>
                <Button type="submit" variant={"contained"} color={"primary"}>Enter</Button>
            </div>
        </Box>
    );
};