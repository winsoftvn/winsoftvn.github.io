import REACT_LOCALHOST from "./host";

const uploadsPhongKham = {
    uploadsImageEmployee: (obj) => {
        return `${REACT_LOCALHOST}/uploads/phongkham/${obj}`;
    },
};

export default uploadsPhongKham;
