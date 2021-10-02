import {addPostAC, postType, updateNewPostTextAC} from '../../../redux/ProfileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/rootStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


type mapStateToPropsType = {
    posts: Array<postType>
    newPostText: string
}

type mapDispatchToPropsType = {
    onChangeHandler: (value: string) => void
    addPost: () => void
}
export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    onChangeHandler: (value: string) => {
        dispatch(updateNewPostTextAC(value))
    },
    addPost: () => {
        dispatch(addPostAC())
        dispatch(updateNewPostTextAC(''))
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)