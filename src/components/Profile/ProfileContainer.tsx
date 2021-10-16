import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {toggleIsFetching} from "../../redux/UsersReducer";
import {setUserProfile, userProfileType} from "../../redux/ProfileReducer";
import Loader from "../Loader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../bll/API";
import {withAuthRedirect} from "../hoc/withRedirect";
import {compose} from "redux";

type ownWithRouterPropsType = {
    userId: string
}
export type ProfilePropsType = RouteComponentProps<ownWithRouterPropsType> & ProfileStatePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.toggleIsFetching(true)
        usersAPI.setProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
        setTimeout(() => {this.props.toggleIsFetching(false)}, 500)
    }

    render() {
        return (<>{this.props.isFetching ? <Loader /> : <Profile {...this.props} />}</>)
    }
}

type ProfileStatePropsType = mapStateToPropsType & mapDispatchPropsType

type mapStateToPropsType = {
    isFetching: boolean
    profile: userProfileType
}
type mapDispatchPropsType = {
    toggleIsFetching: (value: boolean) => void
    setUserProfile: (profile: userProfileType) => void
}


const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isFetching: state.usersPage.isFetching,
    profile: state.profilePage.profile
})

export default compose<ComponentType>(
    connect(mapStateToProps, {toggleIsFetching,setUserProfile}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)