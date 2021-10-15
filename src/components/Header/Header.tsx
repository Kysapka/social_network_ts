import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {useGridStyles} from "../../App";
import {HeaderOwnPropsType} from "./HeaderContainer";

type HeaderPropsType = HeaderOwnPropsType

export const Header = (props: HeaderPropsType) => {

    const GridClasses = useGridStyles();
    console.log(props.login)
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={GridClasses.menuButton} color="inherit"
                            aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={GridClasses.title}>
                    News
                </Typography>

                {props.isAuth ?
                    <Typography>
                       Welcome, {props.login}
                    </Typography>
                    : <Button color="inherit">Login</Button>
                }

            </Toolbar>
        </AppBar>
        // <header className={s.header}>
        //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7nd8Q8HzEMWlWKes0OJeE-COLETPKuhlfg&usqp=CAU' alt='logo' />
        // </header>
    )
}