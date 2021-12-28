import {addPostAC, newPostTextAC} from "../../../../redux/postsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {PostTop} from "./PostTop";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
    onPostChange: (newValue: string) => void
}
export type ProfileTopPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
    },
        onPostChange: (newPost: string) => {
            dispatch(newPostTextAC(newPost))
        }
    }
}

const PostTopContainer = connect(mapStateToProps, mapDispatchToProps)(PostTop)
export default PostTopContainer