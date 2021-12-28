import React from "react"
import PostTopContainer from "./PostTop/PostTopContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {LeftSide} from "../LeftSide/LeftSide";
import {RightSide} from "../RightSide/RightSide";

function Posts() {
    return (
        <div className={`wrapperWithWidgets`}>
            <LeftSide/>
            <div className={`innerCenter`}>
                <div className={`innerWrapper`}>
                    <PostTopContainer/>
                    <MyPostsContainer/>
                </div>
            </div>
            <RightSide />
        </div>
    )
}

export default withAuthRedirect(Posts)