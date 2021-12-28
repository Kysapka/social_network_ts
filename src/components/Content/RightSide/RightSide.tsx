import React from 'react'
import s from './RightSide.module.css'
import {Widget} from "../Widget/Widget";

export function RightSide() {
    return (
        <div className={s.wrapper}>
            <Widget heading={'Widget Heading'} />
            <Widget heading={'It should be here'} />
            <Widget heading={'Almost done'} />
        </div>
    )
}