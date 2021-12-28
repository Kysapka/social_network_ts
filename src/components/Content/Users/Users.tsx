import React from 'react'
import s from "./Users.module.css";
import OneUserCard from "./OneUserCard/OneUserCard";
import {UserType} from "../../../redux/usersReducer";
import PreloaderStar from "../../../icons/Preloaders/PreloaderStar";
import {ProfilePageType} from "./UsersContainer";

type PropsType = {
    users: UserType[]
    imagesBg: Array<string>
    pagesRender: Array<JSX.Element>
    pagesCount: number
    currentPage: number
    isFetching: boolean
    isFollowFetching: number[]
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export default function Users(props: PropsType & ProfilePageType) {
    return (
        <div className={`contentCenter`}>
            <div className={`themeBorder themeBorderPad`}>
                <div className={s.usersTop}>
                    <h3>{props.title ? props.title : 'People Page'}</h3>
                    {props.pagesCount > 1
                        && <div className={s.pagination}>
                            <span onClick={() => props.setCurrentPage(1)} className={s.goToEnd}>&laquo; </span>
                            {props.currentPage > 4 && '... '}
                            {props.pagesRender}
                            {props.currentPage < props.pagesCount - 3 && ' ...'}
                            <span onClick={() => props.setCurrentPage(props.pagesCount)}
                                  className={s.goToEnd}> &raquo;</span>
                        </div>}
                </div>
                <div className={s.usersWrapper + ' ' + s[props.className as string]}>
                    {props.isFetching && <PreloaderStar/>}
                    {props.users.map((u, i) => {
                        return <OneUserCard id={u.id}
                                            isFollowFetching={props.isFollowFetching}
                                            setFollow={props.setFollow}
                                            setUnfollow={props.setUnfollow}
                                            onSetUsers={props.onSetUsers}
                                            background={props.imagesBg[i]}
                                            photos={u.photos}
                                            name={u.name}
                                            uniqueUrlName={u.uniqueUrlName}
                                            followed={u.followed}
                                            status={u.status}
                                            isFetching={props.isFetching}
                                            key={u.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}