import React from 'react';
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import {postsDataType, ProfileReducerActionTypes } from '../../redux/ProfileReducer';
import { StoreType } from '../../redux/rootStore';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';



type propsType = {
   store: StoreType
}

export const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />*/}
            <MyPostsContainer store={props.store} />
        </div>
    )
}