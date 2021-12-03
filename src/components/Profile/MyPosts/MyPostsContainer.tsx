import {addPostAC, postType} from '../../../redux/ProfileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/rootStore';
import {connect} from 'react-redux';

type mapStateToPropsType = {
    posts: Array<postType>
}

type mapDispatchToPropsType = {
    addPostAC: (newPostText: string) => void
}
export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
})

export const MyPostsContainer = connect(mapStateToProps, {addPostAC})(MyPosts)