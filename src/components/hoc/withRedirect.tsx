import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/rootStore";
import {connect} from "react-redux";

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <P>(Component: React.ComponentType<P>) {

    let RedirectComponent = (props: mapStatePropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }

        return <Component {...restProps as P}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
