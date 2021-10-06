import {Button, Paper} from '@material-ui/core';
import React from 'react';
import s from './UserContainer.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {UserType} from '../../redux/UsersReducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";

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
                                          onClick={() => {

                                              axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY" : "9660a6e9-744c-4376-8717-32b82016bc28"
                                                  }
                                              })
                                                  .then((response) => {
                                                      console.log(response.data.resultCode)
                                                      props.unFollow(u.id)
                                                  })

                                          }
                                          }>Unfollow</Button>
                                : <Button variant="outlined" color="primary" size="small"
                                          onClick={() => {

                                              axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {} ,{
                                                  withCredentials: true,
                                                  headers: {
                                                  "API-KEY" : "9660a6e9-744c-4376-8717-32b82016bc28"
                                              }
                                              })
                                                  .then((response) => {
                                                      console.log(response.data.resultCode)
                                                      props.follow(u.id)
                                                  })



                                          }}>Follow</Button>}
                        </div>

                    </Paper>
                )
            })}
        </div>
    )
}


