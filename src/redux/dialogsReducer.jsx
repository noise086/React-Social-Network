const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: ON_MESSAGE_CHANGE, text: text})

let initialState = {
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
    ],
newPostText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                myMessage: true,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            return state
        case ON_MESSAGE_CHANGE:
            state.newMessageText = action.text;
            return state
        default: 
            return state
    }

}

export default dialogsReducer;