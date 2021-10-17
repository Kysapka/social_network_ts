import { Grid } from '@material-ui/core';
import React from 'react';
import s from './ProfileInfo.module.css'
import {userProfileType} from "../../../redux/ProfileReducer";
import {ProfileStatus} from "./ProfileStatus";

export type ProfilePropsType = {
    profile: userProfileType
}

export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, ...props}) => {

    return (
        <Grid item>
            <div className={s.descriptionBlock}>
                <div className={s.ProfileContent}>
                    <div><img alt='user_photo' src={profile.photos.large === null ? 'https://yt3.ggpht.com/a/AATXAJyI6-JI9qHzW3CX3PbTnj2U2zbbWu_V90qcybiEUg=s900-c-k-c0xffffffff-no-rj-mo' : profile.photos.large} /></div>
                    <ProfileStatus />
                    <div>{profile.aboutMe}</div>
                    <div>{profile.fullName}</div>
                    <div>{profile.lookingForAJob}</div>
                    <div>{profile.contacts.vk}</div>
                </div>
            </div>
        </Grid>
    )
}