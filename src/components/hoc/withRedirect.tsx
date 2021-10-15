import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/rootStore";
import {connect} from "react-redux";

type InjectedPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType):InjectedPropsType => ({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect = <P extends InjectedPropsType>(Component: React.ComponentType<any>) => {
    let RedirectComponent = (props:InjectedPropsType) => {
        if (!props.isAuth) {
            console.log('REDIRECT!!!' + props.isAuth)
            return <Redirect to={"/login"}/>
        }
        return <Component {...props as any}/>
    }
    return connect(mapStateToProps, {})(RedirectComponent)
}

