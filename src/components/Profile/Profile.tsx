import React from 'react';
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import {postsDataType, ProfileReducerActionTypes } from '../../redux/ProfileReducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}