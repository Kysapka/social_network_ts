import React from 'react'
import s from './OnlineFriends.module.css'
import OnlineFriend from "./OnlineFriend/OnlineFriend";
import {useSelector} from "react-redux";
import {AppStateTypes} from "../../redux/store";
import {OnlineFriendTypes} from "../../redux/RightSidebar";

export function OnlineFriends() {

    const friends = useSelector<AppStateTypes, OnlineFriendTypes[]>( state => state.rightSidebar.onlineFriends)

    return (
        <div className={s.sidebar}>
            {friends.map( (f: any) => <OnlineFriend key={f.id} name={f.name} avatar={f.avatar} /> )}
        </div>
    )
}