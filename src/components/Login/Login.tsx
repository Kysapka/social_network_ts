import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import {LoginForm} from "./LoginForm";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/rootStore";
import {loginTC} from "../../redux/AuthReducer";


const Login:React.FC<LoginStatePropsType> = (props) => {
    return (

        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
            >
                <Grid style={{borderRadius: 15, width: 400, paddingTop: 20,background: "rgba(225,237,255,0.93)"}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Typography variant="h5">
                        Авторизация:
                    </Typography>
                        <LoginForm loginTC={props.loginTC} isAuth={props.isAuth}/>
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
    }
}

type LoginStatePropsType = ConnectedProps<typeof connectComp>

const connectComp = connect( mapStateToProps, {loginTC})
export default connectComp(Login);