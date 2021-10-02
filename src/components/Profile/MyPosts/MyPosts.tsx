import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {Button, TextField} from '@material-ui/core';
import {myPostsPropsType} from './MyPostsContainer';

export const MyPosts = (props: myPostsPropsType) => {

    let postsElements =
        props.posts.map((p, i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField label="Enter your post message" variant="outlined" value={props.newPostText}
                               onChange={onChangeHandler}/>
                </div>
                <div>
                    <Button style={{marginTop: 10}} color="primary" variant={"contained"} onClick={props.addPost}>Add
                        Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}