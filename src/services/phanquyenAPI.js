import axios from "axios";
import REACT_LOCALHOST from "./host";

const phanquyenAPI = {
    getPhanQuyen: (obj) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-phan-quyen/${obj}`);
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-phan-quyen`, obj);
    },
    delete: (obj) => {
        return axios.delete(
            `${REACT_LOCALHOST}/api/delete-phan-quyen/${obj.RowID_Employee}/${obj.RowID_Employee_IU} `
        );
    },
};

export default phanquyenAPI;
