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
        { id: 1, myMessage: false, message: "Hi" },
        { id: 2, myMessage: true, message: 'How are you' },
        { id: 3, myMessage: false, message: 'lorem cheta tam hui poimichexkiy text dlinnyy kak moya elda' },
        { id: 4, myMessage: true, message: "Fuck you" },
        { id: 5, myMessage: false, message: "Go drink" },
        { id: 6, myMessage: true, message: "Ok" },
    ],
    newMessageText: 'message'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                myMessage: true,
                message: state.newMessageText
            }
            return {
                ...state, 
                newMessageText: '',
                messages: [...state.messages, {...newMessage}]
            }
        }
        case ON_MESSAGE_CHANGE:{
            return {
                ...state,
                newMessageText: action.text
            }
        }
        default: 
            return state
    }
    
}

export default dialogsReducer;