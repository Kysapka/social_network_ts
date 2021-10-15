import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/rootStore";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    let RedirectComponent = (props: any) => {
        if (!props.isAuth) {
            console.log('REDIRECT!!!' + props.isAuth)
            return <Redirect to={"/login"}/>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps, {})(RedirectComponent)
}