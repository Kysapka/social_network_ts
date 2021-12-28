import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";
import {useDispatch, useSelector} from "react-redux";
import {AppStateTypes} from "./redux/store";
import PreloaderStar from "./icons/Preloaders/PreloaderStar";
import {getAuthUserData} from "./redux/auth/authReducer";

function App() {
    const isInitialized = useSelector<AppStateTypes, boolean>(state => state.auth.isInitialized)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAuthUserData())
    }, [dispatch])

    if (!isInitialized) return <PreloaderStar />

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content />
            <OnlineFriends />
        </div>
    );
}

export default App;
