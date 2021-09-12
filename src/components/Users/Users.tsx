import {Button, Grid, makeStyles, Paper} from '@material-ui/core';
import React, {ReactNode} from 'react';
import {UsersPageType} from '../../redux/UsersReducer';
import {UsersPropsType} from './UsersContainer';
import s from './UserContainer.module.css'
import axios from 'axios';

type RenderType = () => ReactNode

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        let baseURL = 'https://social-network.samuraijs.com/api/1.0/users'
        axios.get(baseURL).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return(
        <div className={s.userContainer}>
            {this.props.usersPage.map(u => {
                return (
                    <Paper key={u.id} className={s.userItem}>
                        <div className={s.nameItem}>{u.name}</div>
                        {u.followed
                            ? <Button variant="outlined" color="primary" size="small">Unfollow</Button>
                            : <Button variant="outlined" color="primary" size="small">Follow</Button>}
                    </Paper>
                )
            })}
        </div>
        )
    }
};

export default Users;
