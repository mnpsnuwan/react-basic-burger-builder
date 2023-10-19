import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-react-basic-burger-default-rtdb.firebaseio.com/'
})

export default instance;