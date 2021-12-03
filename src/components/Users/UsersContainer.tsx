import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/rootStore';
import {follow, getUsers, initialUserPageStateType, unFollow} from '../../redux/UsersReducer';
import {Users} from './Users';
import Loader from '../Loader';
import {compose} from "redux";
import {
    getCurrentPageReselect,
    getFollowingInProgressReselect,
    getIsFetchingReselect,
    getpageSizeReselect,
    getTotalUsersCountReselect,
    getUsersStateReselect
} from "./UserSelectors";

type UsersConnectPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = initialUserPageStateType

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersConnectPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
              { this.props.isFetching ? <Loader /> : <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
            />}

        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersStateReselect(state),
        pageSize: getpageSizeReselect(state),
        totalUsersCount: getTotalUsersCountReselect(state),
        currentPage: getCurrentPageReselect(state),
        isFetching: getIsFetchingReselect(state),
        followingInProgress: getFollowingInProgressReselect(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,    {follow, unFollow, getUsers}),
    // withAuthRedirect
)(UsersContainer)

