import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/rootStore';
import {setUsersAC, followAC, unFollowAC, UsersType } from '../../redux/UsersReducer';
import Users from './Users';

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (items: UsersType) => void
}



const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (items: Array<any>) => {
            dispatch(setUsersAC(items))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



