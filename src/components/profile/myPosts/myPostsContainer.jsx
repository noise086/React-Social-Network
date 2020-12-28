import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import MyPosts from './myPosts';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// debugger
const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;