import {addPostAC, postType} from '../../../redux/ProfileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/rootStore';
import {connect} from 'react-redux';
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<postType>
    // newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    // newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({

    addPost: (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)