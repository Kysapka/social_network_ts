import React from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {myPostsPropsType} from './MyPostsContainer';
import {PostForm} from "./Post/PostForm";

export const MyPosts = (props: myPostsPropsType) => {

    let postsElements =
        props.posts.map((p, i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostForm addPost={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}



