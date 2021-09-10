import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/rootStore';
import {setUsersAC, unFollowAC, UsersPageType } from '../../redux/UsersReducer';
import Users from './Users';

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: () => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: () => {
            dispatch(setUsersAC())
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
function followAC(userID: string): any {
    throw new Error('Function not implemented.');
}

