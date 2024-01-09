import axios from "axios";
import REACT_LOCALHOST from "./host";

const menuAPI = {
    getAll: () => {
        return axios.get(`${REACT_LOCALHOST}/api/show-menu`);
    },
};

export default menuAPI;
