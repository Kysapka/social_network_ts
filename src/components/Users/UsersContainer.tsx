import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/rootStore';
import {
    follow,
    initialUserPageStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UserType
} from '../../redux/UsersReducer';
import axios from 'axios';
import {Users} from './Users';
import Loader from '../Loader';


type UsersConnectPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = initialUserPageStateType

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (items: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
}

class UsersContainer extends React.Component<UsersConnectPropsType> {

    componentDidMount() {

        let baseURL = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`

        this.props.toggleIsFetching(true)

        axios.get(baseURL, {
                    withCredentials: true
                }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
        setTimeout(() => {this.props.toggleIsFetching(false)}, 500)
    }

    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        let baseURL = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`

        this.props.toggleIsFetching(true)

        axios.get(baseURL, {
                    withCredentials: true
                }).then(response => {
            this.props.setUsers(response.data.items)
        })
        setTimeout(() => {this.props.toggleIsFetching(false)}, 500)
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
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps,

    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }


)(UsersContainer)

