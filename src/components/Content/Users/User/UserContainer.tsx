import React from "react";
import User from "./User";
import {connect} from "react-redux";
import {getProfile, ProfilePageTypes} from "../../../../redux/profileReducer";
import {AppStateTypes} from "../../../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getStatus, setNewStatus} from "../../../../redux/statusReducer";


type PathParamsType = {
    userID: string,
}

export type AddPropsType = {
    idMe: number
    status: string
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePageTypes & MDTPType & AddPropsType

export class UserAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        const userID = this.props.match.params.userID
        this.props.getProfile(+userID)
        this.props.getStatus(+userID)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        const userID = this.props.match.params.userID
        if (prevProps.match.params.userID === userID) return
        this.props.getProfile(+userID)
        this.props.getStatus(+userID)
    }

    render() {
        return <User {...this.props} />
    }
}

export type MDTPType = {
    getProfile: (userID: number) => void
    getStatus: (userID: number) => void
    setNewStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateTypes): ProfilePageTypes & AddPropsType => {
    return {
        userId: state.profilePage.userId,
        aboutMe: state.profilePage.aboutMe,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        fullName: state.profilePage.fullName,
        contacts: {
            github: state.profilePage.contacts.github,
            vk: state.profilePage.contacts.vk,
            facebook: state.profilePage.contacts.facebook,
            instagram: state.profilePage.contacts.instagram,
            twitter: state.profilePage.contacts.twitter,
            website: state.profilePage.contacts.website,
            youtube: state.profilePage.contacts.youtube,
            mainLink: state.profilePage.contacts.mainLink
        },
        photos: {
            small: state.profilePage.photos.small,
            large: state.profilePage.photos.large
        },
        isFetching: state.profilePage.isFetching,
        status: state.status.status,
        idMe: state.auth.id,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, setNewStatus}),
)(UserAPI)


