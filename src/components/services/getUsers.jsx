import axios from "axios";



export default class GetUsers {

    getUsersBase = () => {
        const users = axios.get('https://social-network.samuraijs.com/api/1.0/users')
        return users
    }
}
