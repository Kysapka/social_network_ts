import {Button, Paper} from '@material-ui/core';
import React from 'react';
import s from './UserContainer.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {UserType} from '../../redux/UsersReducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../bll/API";

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (event: React.ChangeEvent<unknown>, pageNumber: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const setFollowHandler = (userId: number) => {
        usersAPI.follow(userId).then(resultCode => {
            resultCode === 0 ? props.follow(userId) : console.warn('SERVER NOT RESPONSE...')
        })
    }
    const setUnfollowHandler = (userId: number) => {
        usersAPI.unFollow(userId).then(resultCode => {
            resultCode === 0 ? props.unFollow(userId) : console.warn('SERVER NOT RESPONSE...')
        })
    }

    return (
        <div className={s.userContainer}>
            <div className={s.paginator}>
                <Stack spacing={2}>
                    <Pagination variant="outlined" shape="rounded" count={pagesCount} color="primary"
                                page={props.currentPage} onChange={props.onPageChanged}
                    />
                </Stack>

            </div>

            {props.users.map(u => {
                return (
                    <Paper key={u.id} className={s.userItem}>
                        <div className={s.nameItem}>{u.name}</div>
                        <div className={s.userInfoBlock}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={s.userPhoto} alt='userAvatar'
                                     src={u.photos.small === null ? 'https://yt3.ggpht.com/a/AATXAJyI6-JI9qHzW3CX3PbTnj2U2zbbWu_V90qcybiEUg=s900-c-k-c0xffffffff-no-rj-mo' : u.photos.small}/>
                            </NavLink>
                            {u.followed
                                ? <Button variant="outlined" color="primary" size="small"
                                          onClick={() => setUnfollowHandler(u.id)}>Unfollow</Button>

                                : <Button variant="outlined" color="primary" size="small"
                                          onClick={() => setFollowHandler(u.id)}>Follow</Button>
                            }
                        </div>

                    </Paper>
                )
            })}
        </div>
    )
}


