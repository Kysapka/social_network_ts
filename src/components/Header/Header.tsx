import React from "react"
import s from "./Header.module.css"
import AuthContainer from "./Auth/AuthContainer";

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.logoName}>
                <p className={s.logoIT}>IT</p>
                <p className={s.logoIN}>IN</p>
                <p className={s.logoCubator}>CUBATOR </p>
                <span className={s.logoKama}>I T - K A M A S U T R A . C O M</span>
            </div>
            <AuthContainer/>
        </header>
    )
}