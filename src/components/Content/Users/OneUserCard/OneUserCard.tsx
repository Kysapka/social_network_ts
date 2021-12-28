import React from 'react'
import s from './OneUserCard.module.css'
import {UserType} from "../../../../redux/usersReducer";
import userIcon from '../../../../assets/images/users/userIcon4.jpg'
import userIcon2 from '../../../../assets/images/users/userIcon5.jpg'
import {NavLink} from 'react-router-dom';

type PropsType = {
    background: string
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    isFetching: boolean
    isFollowFetching: number[]
}

export default function OneUserCard(props: UserType & PropsType) {
    const onUnfollowHandler = () => {
        props.setUnfollow(props.id)
    }
    const onFollowHandler = () => {
        props.setFollow(props.id)
    }

    const userIconAny = props.id % 3 === 0 ? userIcon2 : userIcon

    const userIsFollowFetching = props.isFollowFetching.includes(props.id)

    return (
        <div className={`${s.wrapper} ${props.isFetching && s.opacity}`}>
            <div className={s.card}>
                <div className={s.bgBox}>
                    {props.followed ? <button disabled={userIsFollowFetching} onClick={onUnfollowHandler}
                                              className={s.follow}>Unfollow</button>
                        : <button disabled={userIsFollowFetching} onClick={onFollowHandler}
                                  className={s.follow}>Follow</button>}
                    <img className={s.bgImg} src={props.photos.large ? props.photos.large : props.background}
                         alt="User Background"/>
                </div>
                <div className={s.infoBox}>
                    <div className={s.privet}>
                        <div className={s.imgBox}>
                            <img className={s.userImg} src={props.photos.small ? props.photos.small : userIconAny}
                                 alt="User"/>
                        </div>
                        <div className={s.data}>
                            <NavLink to={`/profile/${props.id}`} className={s.name}>{props.name}</NavLink>
                            <p className={s.location}>The Earth Planet</p>
                        </div>
                    </div>
                    {props.status
                        ? <div className={s.statusWrapper}><h5 className={s.status}>{props.status}</h5></div>
                        : <p className={s.noStatus}>haven't said anything yet...</p>
                    }
                </div>
            </div>
        </div>
    )
}