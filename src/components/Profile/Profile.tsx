import React from 'react';
import {ProfileInfo, ProfilePropsType} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer />
        </div>
    )
}