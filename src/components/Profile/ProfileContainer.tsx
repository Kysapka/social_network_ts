import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {toggleIsFetching} from "../../redux/UsersReducer";
import {setUserProfile, userProfileType} from "../../redux/ProfileReducer";
import Loader from "../Loader";

class ProfileContainer extends React.Component<ProfileStatePropsType> {

    componentDidMount() {
        let baseURL = `https://social-network.samuraijs.com/api/1.0/profile/2`
        this.props.toggleIsFetching(true)
        axios.get(baseURL).then(response => {
            console.log(response.data)
            this.props.setUserProfile(response.data)
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



export default connect(mapStateToProps, {
    toggleIsFetching,
    setUserProfile
})(ProfileContainer)