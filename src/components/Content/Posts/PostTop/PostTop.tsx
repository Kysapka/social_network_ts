import React, {KeyboardEvent} from 'react'
import s from './PostTop.module.css'
import {ProfileTopPropsType} from "./PostTopContainer";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput {
    newPost: string;
}

export function PostTop(props: ProfileTopPropsType) {
    const {register, handleSubmit, setValue} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        props.addPost(data.newPost)
        setValue('newPost', '')
    }

    const onEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.shiftKey || event.ctrlKey) return
        if(event.key === 'Enter') {
            handleSubmit(onSubmit)()
            event.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>Create Post</h3>
            <div className={s.main}>
                <div className={s.avatar}><img src={'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar9.jpg'} alt="avatar"/></div>
                <textarea {...register("newPost")}
                          onKeyPress={onEnterPress}
                          className={s.text}
                          placeholder="Share some what you are thinking?"/>
            </div>
            <button className={s.submit}>Post</button>
        </form>
    )
}