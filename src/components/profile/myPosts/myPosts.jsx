import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxlength, required } from '../../../utils/validators';
import { Textarea } from '../../common/formsControl/formsControl';
import s from './myPosts.module.css';
import Post from './post/post';


const MyPosts = (props) => {

    const addPost = (values) => {
        // debugger
        props.addPost(values.textarea)
        values.textarea = ''
    }
    
    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likescount={p.likescount} />);
    return (
        <div className={s.wrapper}>
            <div>
                <MyPostsFormRedux onSubmit={addPost} />
                <div className={s.myPosts}>MY POSTS</div>
                {postsElements}
            </div>

        </div>
    )

}

const maxLength = maxlength(20)

let MyPostsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={s.input}>
            <div>
                <Field  validate={[required, maxLength]}
                        name={'textarea'} 
                        component={Textarea} 
                        placeholder={'Как дела?'} 
                        type='text' />
            </div>
            <div>
            <button
                className={s.button}
            >send</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({ form: 'myPosts' })(MyPostsForm)

export default MyPosts;