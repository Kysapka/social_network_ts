import React from 'react';
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import {postsDataType, ProfileReducerActionTypes } from '../../redux/ProfileReducer';



type propsType = {
    profilePage:  { posts: postsDataType, newPostText: string }
    dispatch: (action: ProfileReducerActionTypes) => void
}

export const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    )
}