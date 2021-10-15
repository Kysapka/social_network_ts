import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/rootStore';
import {follow, getUsers,initialUserPageStateType,unFollow} from '../../redux/UsersReducer';
import {Users} from './Users';
import Loader from '../Loader';
import {withAuthRedirect} from "../hoc/withRedirect";


type UsersConnectPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = initialUserPageStateType
    // & {isAuth: boolean}

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
        // if (!this.props.isAuth) {
        //     return <Redirect to={"/login"}/>
        // }
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        // isAuth: state.auth.isAuth
    }
}

let withRedirectUserContainer = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,    {follow, unFollow, getUsers})(withRedirectUserContainer)

