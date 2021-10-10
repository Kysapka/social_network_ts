import React from 'react';
import {Header} from "./Header";
import {AuthStateType, setAuth} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {authAPI} from "../../bll/API";

class HeaderContainer extends React.Component<HeaderOwnPropsType> {

    componentDidMount() {
            authAPI.autorizatedMe().then(data => {
                this.props.setAuth(data)
            })
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