import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar'
import {Route} from 'react-router-dom'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Container, Grid, makeStyles, Paper} from '@material-ui/core';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

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

export const App = () => {

    const PaperClasses = usePaperStyles();
    const GridClasses = useGridStyles();

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
                               <Route path="/login" render={() => <Login />}/>
                               <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                               <Route path="/users" render={() => <UsersContainer />}/>
                               <Route path="/dialogs" render={() => <DialogsContainer />}/>
                           </Paper>
                       </Grid>
                   </Grid>
               </div>
           </Container>
    )
}
