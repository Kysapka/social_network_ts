import React from 'react'
import s from './NavItem.module.css'
import {NavLink} from "react-router-dom";

type NavItemPropsType = {
    name: string
    to: string
    children: JSX.Element
}

export function NavItem(props: NavItemPropsType) {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.link} activeClassName={s.active} to={props.to}>
                {props.children}
            </NavLink>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}