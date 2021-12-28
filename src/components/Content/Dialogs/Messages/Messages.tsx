import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import {MessagesPropsType} from "./MessagesContainer";
import s from './Messages.module.css'
import {LeftSide} from "../../LeftSide/LeftSide";
import {RightSide} from "../../RightSide/RightSide";

export function Messages(props: MessagesPropsType) {
    return (
        <div className={`wrapperWithWidgets`}>
            <LeftSide/>
            <div className={`innerCenter`}>
                <div className={'themeBorder themeBorderPad'}>
                    <h3>Messages</h3>
                    <div className={s.center}>
                        {props.messages.map(m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message}
                                                             isYou={m.isYou}/>)}
                    </div>
                    <SendMessageContainer/>
                </div>
            </div>
            <RightSide />
        </div>
    )
}