import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {ProfilePageType, ProfileReducerActionTypes} from './redux/ProfileReducer';
import {AppStateType} from './redux/rootStore';
import {DialogsReducerActionTypes} from './redux/DialogsReducer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {AppBar, Toolbar, Button, Container, IconButton, makeStyles, Typography, Grid, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Users from './components/Users/Users';
import { UsersContainer } from './components/Users/UsersContainer';

const useGridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));
const useContainerStyles = makeStyles((theme) => ({
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

export const App = () => {
    const Containerclasses = useContainerStyles();
    const useGridClasses = useGridStyles();

    return (
           <Container fixed>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={Containerclasses.menuButton} color="inherit"
                                    aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={Containerclasses.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

               <div className={useGridClasses.root}>
                   <Grid container spacing={0}>
                       <Grid item xs>
                           <Paper className={useGridClasses.paper} style={{height: "100%"}}>
                               <Navbar/>
                           </Paper>
                       </Grid>
                       <Grid item xs={9}>
                           <Paper className={useGridClasses.paper} style={{height: "100%"}}>
                               <Route path="/profile" render={() => <Profile />}/>
                               <Route path="/users" render={() => <UsersContainer />}/>
                               <Route path="/dialogs" render={() => <DialogsContainer />}/>
                           </Paper>
                       </Grid>
                   </Grid>
               </div>
           </Container>
    )
}
