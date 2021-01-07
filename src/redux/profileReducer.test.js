import profileReducer, { addPost, deletePost, setStatus } from "./profileReducer"


it('adding post', () => {
    let action = addPost("newPost")
    let state = {
        posts: [
            { id: 1, message: 'Hello world', likescount: 3 },
            { id: 2, message: 'Its my third post', likescount: 10 },
            { id: 3, message: 'Its my second post', likescount: 13 },
            { id: 4, message: 'Its my first post', likescount: 23 },
        ]
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it('change status', () => {
    let action = setStatus("trbrbr")
    let state = {
        status: ''
    }

    let newState = profileReducer(state, action)

    expect(newState.status).toBe('trbrbr')
})

it('deleting post', () => {
    let action = deletePost(1)
    let state = {
        posts: [
            { id: 1, message: 'Hello world', likescount: 3 },
            { id: 2, message: 'Its my third post', likescount: 10 },
            { id: 3, message: 'Its my second post', likescount: 13 },
            { id: 4, message: 'Its my first post', likescount: 23 },
        ]
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})