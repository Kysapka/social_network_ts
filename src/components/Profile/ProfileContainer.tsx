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
        let userId = this.props.match.params.userId || 18179
        this.props.toggleIsFetching(true)
        console.log(userId)
        this.props.getProfileTC(Number(userId))
        this.props.getStatusTC(Number(userId))
        setTimeout(() => {this.props.toggleIsFetching(false)}, 500)
    }

    render() {
        return (<>{this.props.isFetching ? <Loader /> : <Profile {...this.props} updateStatusTC={this.props.updateStatusTC} />}</>)
    }
}

type ProfileStatePropsType = ConnectedProps<typeof connectComp>


const mapStateToProps = (state: AppStateType) => ({
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