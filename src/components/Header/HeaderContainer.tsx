import React from 'react';
import {Header} from "./Header";
import {AuthStateType, setAuth} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/rootStore";

class HeaderContainer extends React.Component<HeaderOwnPropsType> {

    componentDidMount() {
        const autorizatedMe = async () => {
            let response = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            this.props.setAuth(response.data.data)
        }
        autorizatedMe()

        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        //     withCredentials: true
        // })
        //     .then((response) => {
        //         this.props.setAuth(response.data.data)
        //     })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type HeaderOwnPropsType = mapStateToPropsType & mapDispatchPropsType
type mapStateToPropsType = AuthStateType
type mapDispatchPropsType = {
    setAuth: (data: AuthStateType) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({...state.auth})
export default connect(mapStateToProps, {setAuth})(HeaderContainer)