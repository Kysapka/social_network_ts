import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/rootStore';
import {
    follow, getUsers,
    initialUserPageStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowing,
    toggleIsFetching,
    unFollow,
    UserType
} from '../../redux/UsersReducer';
import {Users} from './Users';
import Loader from '../Loader';
import {usersAPI} from "../../bll/API";
import {Dispatch} from "redux";



type UsersConnectPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = initialUserPageStateType

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (items: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
    toggleFollowing: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersConnectPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    //     this.props.toggleIsFetching(true)
    //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //         .then(data => {
    //             this.props.setUsers(data.items)
    //             this.props.setTotalUsersCount(data.totalCount)
    //         })
    //     setTimeout(() => {this.props.toggleIsFetching(false)}, 500)
    // }

    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowing={this.props.toggleFollowing}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowing,
        getUsers
    })(UsersContainer)

