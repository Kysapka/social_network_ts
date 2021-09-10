import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject} from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {
    addPostAC,
    postsDataType,
    postType,
    ProfileReducerActionTypes,
    updateNewPostTextAC
} from '../../../redux/ProfileReducer';
import {Button, Input, TextField} from '@material-ui/core';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/rootStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


type mapStateToPropsType = {
    posts: Array<postType>
    newPostText: string
}

type mapDispatchToPropsType = {
    onChangeHandler: (value: string) => void
    addPost: () => void
}
export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    onChangeHandler: (value: string) => {
        dispatch(updateNewPostTextAC(value))
    },
    addPost: () => {
        dispatch(addPostAC())
        dispatch(updateNewPostTextAC(''))
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)