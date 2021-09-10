import React from 'react';
import {UsersPageType} from '../../redux/UsersReducer';
import {UsersPropsType} from './UsersContainer';

const Users = (props: UsersPropsType) => {

    // if (props.usersPage.length === 0) {
    //     props.setUsers()
    // }

    return (
        <div>
            { props.usersPage.map(u =>  {
                return (
                    <h1>{u.id}</h1>
                )
            })}
        </div>
    )
};

export default Users;