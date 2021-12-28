import React, {KeyboardEvent} from 'react'
import IconSend from '../../../../../icons/IconSend'
import s from './SendMessage.module.css'
import {SendMessagePropsType2} from "./SendMessageContainer";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput {
    newMessage: string;
}

export function SendMessage(props: SendMessagePropsType2) {
    const {register, handleSubmit, setValue} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        props.onMessageSend(data.newMessage)
        setValue('newMessage', '')
    }

    const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (!e.shiftKey && !e.ctrlKey && e.key === 'Enter') {
            handleSubmit(onSubmit)()
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
            <textarea {...register("newMessage")}
                      onKeyPress={onEnterPress}
                      className={s.textarea}
                      placeholder="Write your message here..." />
            <button className={s.send}>
                <IconSend />
            </button>
        </form>
    )
}
