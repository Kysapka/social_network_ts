import { Grid } from '@material-ui/core';
import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <Grid item>
            <div>
                <img className={s.image}
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                     alt='mylogoimage'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </Grid>
    )
}