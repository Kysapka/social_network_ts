import React from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, haw are you?' likesCount={Number(2)}/>
                <Post message='This is my first post' likesCount={Number(8)}/>
            </div>
        </div>

    )
}