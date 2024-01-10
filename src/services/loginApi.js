import axios from "axios";
import REACT_LOCALHOST from "./host";
// import { authHeader } from '../components/helpers';
const loginAPI = {
    
    login: (user) => {
        return axios.post(`${REACT_LOCALHOST}/api/login`, user);
    },
    profileFetch: () => {
        let token = JSON.parse(localStorage.getItem('token'));
        return axios.post(`${REACT_LOCALHOST}/api/profile-fetch`, { "accessToken": token} );
    },
};

export default loginAPI;
