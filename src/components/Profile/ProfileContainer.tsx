import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {toggleIsFetching} from "../../redux/UsersReducer";
import {getProfileTC, getStatusTC, setUserProfileAC, updateStatusTC} from "../../redux/ProfileReducer";
import Loader from "../Loader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withRedirect";
import {compose} from "redux";

type ownWithRouterPropsType = {
    userId: string
}

export type ProfilePropsType = RouteComponentProps<ownWithRouterPropsType> & ProfileStatePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = 0;
        if (this.props.match.params.userId) {
            userId = Number(this.props.match.params.userId)
        } else {
            if (this.props.authId) {
                userId = this.props.authId
            }
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        console.log('Profile container component rendered!')
        return (<>{this.props.isFetching ? <Loader /> : <Profile {...this.props} />}</>)
    }
}

type ProfileStatePropsType = ConnectedProps<typeof connectComp>


const mapStateToProps = (state: AppStateType) => ({
    authId: state.auth.id,
    isFetching: state.usersPage.isFetching,
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

let connectComp = connect(mapStateToProps, {toggleIsFetching,setUserProfileAC, getProfileTC, getStatusTC, updateStatusTC})
export default compose<ComponentType>(
    connectComp,
    withAuthRedirect,
    withRouter,
)(ProfileContainer)