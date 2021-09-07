import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject } from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {addPostAC, postsDataType, ProfileReducerActionTypes, updateNewPostTextAC } from '../../../redux/ProfileReducer';
import {Button, Input, TextField } from '@material-ui/core';
import { MyPosts } from './MyPosts';
import {AppStateType, StoreType } from '../../../redux/rootStore';

type propsType = {
    store: StoreType
}
export const MyPostsContainer = (props: propsType) => {

    let profilePage = props.store.getState().profilePage
    let dispatch = props.store.dispatch

    const onChangeHandler = (value: string) => {
       dispatch(updateNewPostTextAC(value))
    }

    const addPost = () => {
       dispatch(addPostAC())
       dispatch(updateNewPostTextAC(''))
    }

    return <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} addPost={addPost} onChangeHandler={onChangeHandler}/>
}