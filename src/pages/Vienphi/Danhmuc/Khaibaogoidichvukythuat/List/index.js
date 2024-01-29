import { Table, Button, Dropdown, Form, Input, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faEdit,
    // faTrashCan,
    // faEye,
    // faPenToSquare,
    faPlus,
    faArrowRotateLeft,
    faPrint,
    faFileExport,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { motion } from "framer-motion";

import Menuvienphi from "../../../Menuvienphi";
import ds from "../../../../../util/data";
import "../../danhmuc.scss";
function Khaibaogoidichvukythuat() {
    // const [open, setOpen] = useState(false);
    // const [click, setClick] = useState(false);
    // const [activeModify, setActiveModify] = useState(false);

    // const handleDataCreate = () => {
    //     setOpen(true);
    // };
    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    // const items = [
    //     {
    //         key: "1",
    //         label: "Xem",
    //         icon: <FontAwesomeIcon icon={faEye} />,
    //     },
    //     {
    //         key: "2",
    //         label: "Xóa",
    //         icon: <FontAwesomeIcon icon={faTrashCan} />,
    //     },
    //     {
    //         key: "3",
    //         label: "Sửa",
    //         icon: <FontAwesomeIcon icon={faPenToSquare} />,
    //     },
    // ];
    const column0 = [
        {
            title: "Mã gói",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Tên gói",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "200px" }}>
                    {" "}
                    <Checkbox />{" "}
                </div>
            ),
        },
        {
            title: "Tên dịch vụ",
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
                    <div className="row mt-2 mx-2">
                        <div className=" col-md-6 m-0 p-0">
                            <div className="vienphi-danhmuc-title mx-1">Danh sách gói</div>
                            <div>
                                <Form>
                                    <div className="row ">
                                        <Form.Item
                                            label={<div className="form-input-label">Mã gói</div>}
                                            className="col-md-4 m-0"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label">Tên gói</div>}
                                            className="col-md-5 m-0"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <div className="col-md-3 m-auto p-0 text-center">
                                            <div className="d-flex align-items-center">
                                                <Dropdown menu={menuProps}>
                                                    <Button className="form-btn bg text-white">
                                                        <FontAwesomeIcon
                                                            icon={faGear}
                                                            className=" mx-1 "
                                                        />
                                                        Thao tác
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <Table
                                columns={column0}
                                dataSource={ds}
                                // loading={loading}
                                scroll={{ x: true }}
                                size="small"
                                pagination={{ pageSize: 20 }}
                                className="p-0"
                            />
                        </div>
                        <div className=" col-md-6 m-0 p-0">
                            <div className="vienphi-danhmuc-title mx-2">
                                Chi tiết dịch vụ trong gói
                            </div>
                            <div>
                                <Form>
                                    <div className="row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label">Tên dịch vụ</div>
                                            }
                                            className="col-md-5 m-0"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label">Giá</div>}
                                            className="col-md-4 m-0"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <div className="col-md-3 m-auto p-0 text-center">
                                            <div className="d-flex align-items-center">
                                                <Dropdown menu={menuProps}>
                                                    <Button className="form-btn bg text-white">
                                                        <FontAwesomeIcon
                                                            icon={faGear}
                                                            className=" mx-1 "
                                                        />
                                                        Thao tác
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <Table
                                columns={column0}
                                dataSource={ds}
                                // loading={loading}
                                scroll={{ x: true }}
                                size="small"
                                pagination={{ pageSize: 20 }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaogoidichvukythuat;
