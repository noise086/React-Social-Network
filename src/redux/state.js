const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

let store = {
    _state: {
        profilePage:{ 
            posts: [
                { id: 1, message: 'Hello world', likescount: 3 },
                { id: 2, message: 'Its my third post', likescount: 10 },
                { id: 3, message: 'Its my second post', likescount: 13 },
                { id: 4, message: 'Its my first post', likescount: 23 },
            ]
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dick' },
                { id: 2, name: 'Kaliph' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Natasha' },
                { id: 5, name: 'Vitro' },
                { id: 6, name: 'Elena' },
            ],
            messages: [
                { myMessage: false, message: "Hi" },
                { myMessage: true, message: 'How arw you' },
                { myMessage: false, message: 'Who is it' },
                { myMessage: true, message: "Fuck you" },
                { myMessage: false, message: "Go drink" },
                { myMessage: true, message: "Ok" },
            ]
        },
        sideBar: {
            friends: [
                {name: 'Dick', avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
                {name: 'Kaliph', avatar: 'https://otvet.imgsmail.ru/download/48a098246d7381f96b2098980d0c5fa1_i-10.jpg'},
                {name: 'Sasha', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3683451/pub_5efb3ff066fe1d5006536937_5efb4cb267cc5e13be1840cc/scale_1200'}
            ]
        },
        newPostText: '',
        newMessageText: 'type message'
    },
    getState () {
        return this._state
    },
    subscribe(observer) {
        this.renderedEntiresTree = observer
    },
    renderedEntiresTree() {
        console.log('state changed')
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.newPostText,
                likescount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this.renderedEntiresTree();
        } else if (action.type === 'ON-POST-CHANGE') {
            this._state.newPostText = action.text;
            this.renderedEntiresTree();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                myMessage: true,
                message: this._state.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this.renderedEntiresTree();
        } else if (action.type === 'ON-MESSAGE-CHANGE') {
            this._state.newMessageText = action.text;
            this.renderedEntiresTree();
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, text: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: ON_MESSAGE_CHANGE, text: text})

window.store = store;
export default store;