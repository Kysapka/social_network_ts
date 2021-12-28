import React from "react";
import {Auth} from "./Auth";
import {getAuthUserData, logOut} from "../../../redux/auth/authReducer";
import {connect} from "react-redux";
import {AppStateTypes} from "../../../redux/store";

class AuthContainer extends React.Component<MSPType & MDPType, {  }> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Auth isAuth={this.props.isAuth}
                     email={this.props.email}
                     photo={this.props.photo}
                     logOut={this.props.logOut}
        />;
    }
}

type MSPType = {
    email: string | null
    isAuth: boolean
    photo: string
}

type MDPType = {
    getAuthUserData: () => void
    logOut: () => void
}

const mapStateToProps = (state: AppStateTypes): MSPType => {
    return {
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        photo: state.auth.smallPhoto
    }
}

export default connect(mapStateToProps, {getAuthUserData, logOut})(AuthContainer)