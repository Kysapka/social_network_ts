import {postTypes} from "../../../../redux/postsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
    posts: postTypes[]
}
type MapDispatchToPropsType = {}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        posts: state.postsPage.posts
    }
}

export default connect(mapStateToProps, {})(MyPosts)
