import React from 'react'
import s from './LeftSide.module.css'
import {Widget} from "../Widget/Widget";
import {Route} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";

export function LeftSide() {
    return (
        <div className={s.wrapper}>
            <Route path={'/messages'} render={ () => <Widget
                heading={'Dialogs'}
                children={<DialogsContainer />} /> } />
            <Widget heading={'Something'} />
        </div>
    )
}