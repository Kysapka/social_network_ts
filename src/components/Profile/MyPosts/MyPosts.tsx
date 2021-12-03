import React, {FC, memo} from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {myPostsPropsType} from './MyPostsContainer';
import {PostForm} from "./Post/PostForm";

export const MyPosts: FC<myPostsPropsType> = memo(({posts, addPost}) => {
    console.log('MyPosts component rendered!')

    let postsElements =
        posts.map((p, i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostForm addPost={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})



