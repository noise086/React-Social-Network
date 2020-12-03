import React from 'react';
import Post from './post/post'
import s from './myPosts.module.css';




const MyPosts = (props) => {
    const postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likescount={p.likescount} />);

    let newPostElement = React.createRef()

    const addPosts = () => {
        props.addPost();
        props.onPostChange('');
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <input ref={newPostElement} 
                           type='text' 
                           value={props.state.newPostText}
                           placeholder='Как дела?' 
                           className={s.inputPost} 
                           onChange={onPostChange}
                    />
                    <button 
                        className={s.button}
                        onClick={addPosts}
                        >send</button>
                </div>
                    {postsElements}
            </div>

        </div>
    )

}

export default MyPosts;