import React from 'react';
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import {ActionTypes, postsDataType } from '../../redux/store';


type propsType = {
    profilePage:  { posts: postsDataType, newPostText: string }
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    )
}