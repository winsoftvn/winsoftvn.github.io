import axios from "axios";
import REACT_LOCALHOST from "./host";

const employeeAPI = {
    getAll: () => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee`);
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-employee`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-employee`, obj);
    },
    delete: (id) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-employee/${id} `);
    },
    getAllGroup: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee-group/${obj}`);
    },
    getAllPosition: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-employee-position/${obj}`);
    },
};

export default employeeAPI;
