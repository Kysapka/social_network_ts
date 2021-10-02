import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/rootStore';
import {
    followAC,
    initialUserPageStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toogleIsFetchingAC,
    unFollowAC,
    UserType
} from '../../redux/UsersReducer';
import axios from 'axios';
import {Users} from './Users';
import Loader from '../Loader';


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = initialUserPageStateType

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (items: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toogleIsFetching: (value: boolean) => void
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        let baseURL = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`

        this.props.toogleIsFetching(true)

        axios.get(baseURL).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
        setTimeout(() => {this.props.toogleIsFetching(false)}, 2000)
    }

    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        let baseURL = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`

        this.props.toogleIsFetching(true)

        axios.get(baseURL).then(response => {
            this.props.setUsers(response.data.items)
        })
        setTimeout(() => {this.props.toogleIsFetching(false)}, 2000)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader /> : <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />}

        </>
    }
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (items: Array<UserType>) => {
            dispatch(setUsersAC(items))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        toogleIsFetching: (value: boolean) => {
            dispatch(toogleIsFetchingAC(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

