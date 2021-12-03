import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar'
import {Route} from 'react-router-dom'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Container, Grid, makeStyles, Paper} from '@material-ui/core';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Loader from "./components/Loader";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "./redux/rootStore";
import {setAuth} from "./redux/AuthReducer";
import {setAppInitializedAC} from "./redux/AppReducer";
import {toggleIsFetching} from "./redux/UsersReducer";

export const useGridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const usePaperStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const ConnectedApp = (props: TConnectedPropsType) => {

    const PaperClasses = usePaperStyles();
    const GridClasses = useGridStyles();


    useEffect(() =>{
        props.toggleIsFetching(true)
        props.setAuth()
        setTimeout(() => {props.setAppInitializedAC(true)}, 5000)
        setTimeout(() => {props.toggleIsFetching(false)}, 500)
    }, [])

    if(!props.isInitialized) {
        return <Loader />
    }

    return (
           <Container fixed>
               <HeaderContainer />
               <div className={GridClasses.root}>
                   <Grid container spacing={0}>
                       <Grid item xs>
                           <Paper className={PaperClasses.paper} style={{height: "100%"}}>
                               <Navbar/>
                           </Paper>
                       </Grid>
                       <Grid item xs={9}>
                           <Paper className={PaperClasses.paper} style={{height: "100%"}}>
                               <Route exact path="/login" render={() => <Login />}/>
                               <Route exact path="/profile/:userId?" render={() => <ProfileContainer />}/>
                               <Route exact path="/users" render={() => <UsersContainer />}/>
                               <Route exact path="/dialogs" render={() => <DialogsContainer />}/>
                           </Paper>
                       </Grid>
                   </Grid>
               </div>
           </Container>
    )
}



const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.app.isAppInitialized
})

const connectedComp = connect(mapStateToProps, {setAuth,toggleIsFetching,setAppInitializedAC})

export const App = connectedComp(ConnectedApp)

type TConnectedPropsType = ConnectedProps<typeof connectedComp>
