import React, {ComponentType} from 'react';
import {Header} from "./Header";
import {AuthStateType, logOutTC, setAuth} from "../../redux/AuthReducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

class HeaderContainer extends React.Component<HeaderOwnPropsType> {
    componentDidMount() {
            this.props.setAuth()
        }

    render() {
        return <Header {...this.props}/>
    }
}

export type HeaderOwnPropsType = connectedCompPropsType & RouteComponentProps<any>

type mapStateToPropsType = AuthStateType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({...state.auth})

type connectedCompPropsType = ConnectedProps<typeof connectedComp>

const connectedComp = connect(mapStateToProps, {setAuth, logOutTC})

export default compose<ComponentType>(
    connectedComp,
    withRouter,
)(HeaderContainer)