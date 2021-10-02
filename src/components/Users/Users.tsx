import {Button, Grid, makeStyles, Paper} from '@material-ui/core';
import React, {ReactNode} from 'react';
import s from './UserContainer.module.css'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {UserType} from '../../redux/UsersReducer';

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
    return (
        <div className={s.userContainer}>

            <div className={s.paginator}>
                <Stack spacing={2}>
                    <Pagination variant="outlined" shape="rounded" count={pagesCount} color="primary"
                                page={props.currentPage} onChange={props.onPageChanged}
                    />
                </Stack>

                {pages.map(p => {
                    return
                })}

            </div>

            {props.users.map(u => {
                return (
                    <Paper key={u.id} className={s.userItem}>

                        <div className={s.nameItem}>{u.name}</div>

                        <div className={s.userInfoBlock}>
                            <img className={s.userPhoto} src={u.photos.small}/>
                            {u.followed
                                ? <Button variant="outlined" color="primary" size="small"
                                          onClick={() => props.unFollow(u.id)}>Unfollow</Button>
                                : <Button variant="outlined" color="primary" size="small"
                                          onClick={() => props.follow(u.id)}>Follow</Button>}
                        </div>

                    </Paper>
                )
            })}
        </div>
    )

    }


