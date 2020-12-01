let state = {
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
            { myMessage: true, message: "Hi" },
        ]
    },
    sideBar: {
        friends: [
            {name: 'Dick', avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
            {name: 'Kaliph', avatar: 'https://lh3.googleusercontent.com/proxy/_ckOLbNNAqO0IND3W4zpUeEt_rSZkXsDFW4Mg5LCKLH71RoJ6u5EtPA1d0KPmULNEG0fnfV9c5IQx7iC4ze2cH7B7t0tH8odYDmCxXtz_1OqT8i1UnMhqVB5vI-7hhzsKScwgQPh-gNAspQRyN-auBjLqU1-8rfzrvV6vX8'},
            {name: 'Sasha', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3683451/pub_5efb3ff066fe1d5006536937_5efb4cb267cc5e13be1840cc/scale_1200'}
        ]
    }
}
export default state;