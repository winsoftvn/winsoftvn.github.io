import { Table, Button, Dropdown, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faPlus,
    faArrowRotateLeft,
    faPrint,
    faFileExport,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

import Menuvienphi from "../../../Menuvienphi";
import ds from "../../../../../util/data";
import "../../danhmuc.scss";
import Search from "antd/es/input/Search";
function Khaibaogiadichvukythuat() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const items = [
        {
            key: "1",
            label: "Xem",
            icon: <FontAwesomeIcon icon={faEye} />,
        },
        {
            key: "2",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "3",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const column0 = [
        {
            title: "Nhóm viện phí",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Loại viện phí",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên DVKT BHYT",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Tên DVKT theo TT 37",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã KP BYT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    const column1 = [
        {
            title: "Loại dịch vụ",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Dịch vụ sử dụng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Đơn giá",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Phụ thu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "P.thu Ng.giờ",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "P.thu Tr.giờ khác CSKCB",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "P.Thu Ng.Giờ khác CSKCB",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Khóa",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày áp dụng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày k.thúc",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "BS G.thiệu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "BS C.định (Cấp 1)",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "BS T.hiện (Cấp 2)",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Điều dưỡng (Cấp 3)",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "VTCT Cấp 1",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "VTCT Cấp 2",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "VTCT Cấp 3",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    const items1 = [
        {
            label: "Thêm mới",
            key: "1",
            icon: <FontAwesomeIcon icon={faPlus} />,
        },
        {
            label: "Load",
            key: "2",
            icon: <FontAwesomeIcon icon={faArrowRotateLeft} />,
        },
        {
            label: "In",
            key: "3",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: "Export file",
            key: "4",
            icon: <FontAwesomeIcon icon={faFileExport} />,
        },
    ];
    const menuProps = {
        items: items1,
    };

    //handle

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Menuvienphi />

                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <div className="vienphi-danhmuc-title mx-2 w-20">
                                Khai báo giá dịch vụ kỹ thuật
                            </div>
                            <div className="w-60">
                                <Search
                                    placeholder="Tìm kiếm..."
                                    allowClear
                                    // onSearch={onSearch}
                                    className="w-100 my-1"
                                />
                            </div>
                            <div className="w-20 d-flex justify-content-center">
                                <Dropdown menu={menuProps}>
                                    <Button className="form-btn bg text-white">
                                        <FontAwesomeIcon icon={faGear} className="mx-1" />
                                        Thao tác
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100 my-1" />
                    <div className="m-1">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="form-input-label">Bảng giá dịch vụ</div>
                                <Table
                                    columns={column0}
                                    dataSource={ds}
                                    // loading={loading}
                                    scroll={{ x: true }}
                                    size="small"
                                    pagination={{ pageSize: 20 }}
                                />
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="form-input-label">Chi tiết giá theo đối tượng </div>
                                <Table
                                    columns={column1}
                                    dataSource={ds}
                                    // loading={loading}
                                    scroll={{ x: true }}
                                    size="small"
                                    pagination={{ pageSize: 20 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaogiadichvukythuat;
