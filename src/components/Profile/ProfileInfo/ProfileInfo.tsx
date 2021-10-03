import { Grid } from '@material-ui/core';
import React from 'react';
import s from './ProfileInfo.module.css'
import {userProfileType} from "../../../redux/ProfileReducer";

export type ProfilePropsType = {
    profile: userProfileType
}

export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, ...props}) => {

    return (
        <Grid item>
            {/*<div>*/}
            {/*    <img className={s.image}*/}
            {/*         src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'*/}
            {/*         alt='mylogoimage'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div className={s.ProfileContent}>
                    <div><img src={profile.photos.large && profile.photos.large} /></div>
                    <div>{profile.aboutMe}</div>
                    <div>{profile.fullName}</div>
                    <div>{profile.lookingForAJob}</div>
                    <div>{profile.contacts.vk}</div>
                </div>
            </div>
        </Grid>
    )
}