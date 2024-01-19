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
    lichsu: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-log-login/${obj}`);
    },
};

export default loginAPI;
