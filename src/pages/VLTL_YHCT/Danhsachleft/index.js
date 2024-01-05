import { Table, Button, Dropdown, Form, Input, Radio, Tree } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faArrowsRotate,
    faBroom,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "./danhsachleft.scss";
import ds from "../../../util/data";
function Danhsachleft() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    const treeData = [
        {
            title: <div className="color-text fw-bold">18/05/2021</div>,
            key: "0-0",
            children: [
                {
                    title: "Loại xét nghiệp: Xét nghiệp huyết học",
                    key: "0-0-0",
                    children: [
                        {
                            title: "Tổng quan tinh tế bào máu ngoại vi",
                            key: "0-0-0-0",
                        },
                        {
                            title: "Tổng quan tinh tế bào máu ngoại vi",
                            key: "0-0-0-1",
                        },
                    ],
                },
                {
                    title: "Loại xét nghiệp: Xét nghiệp huyết học",
                    key: "0-0-1",
                    children: [
                        {
                            title: "Tổng quan tinh tế bào máu ngoại vi",
                            key: "0-0-1-0",
                        },
                        {
                            title: "Tổng quan tinh tế bào máu ngoại vi",
                            key: "0-0-1-1",
                        },
                    ],
                },
            ],
        },
    ];
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
            title: "STT",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Mã BN",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Năm sinh",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
        },
        
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];
    const column1 = [
        {
            title: "",
            dataIndex: "",
            fixed: "left",
            // render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Ngày khám",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "ICD-10",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "CD ICD10",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "CĐ Sơ bộ",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "STT",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "P.Thực hiện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Ghi chú",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Th.Hiện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "TT",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="div-shadow v5">
                    <div>
                        <div className="fw-bold bg-title p-1">DANH SÁCH CHỜ THỰC HIỆN</div>
                        <Form className="my-2 mx-1">
                            <div className="row form-row">
                                <Radio.Group className="d-flex align-items-center justify-content-around">
                                    <Radio value={1} className="form-input-label">
                                        Chưa thực hiên
                                    </Radio>
                                    <Radio value={2} className="form-input-label">
                                        Đã thực hiện
                                    </Radio>
                                </Radio.Group>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 m-0 "
                                    label={<div className="form-input-label">Ngày</div>}
                                >
                                    <Input className="form-control" type="date" />
                                </Form.Item>

                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">đến</div>}
                                >
                                    <Input className="form-control " type="date" />
                                </Form.Item>
                            </div>
                            <div className="row form-row mb-3 mt-1">
                                <Form.Item className="col-md-2 ">
                                    <Button className="danhsachleft-btn bg m-0">
                                        <FontAwesomeIcon icon={faBroom} />
                                    </Button>
                                </Form.Item>
                                <Form.Item className="col-md-8 p-0">
                                    <Input type="search" className="form-control" />
                                </Form.Item>
                                <Form.Item className="col-md-2">
                                    <Button className="danhsachleft-btn bg m-0">
                                        <FontAwesomeIcon icon={faArrowsRotate} />
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                        <div className="m-1">
                            <Table
                                columns={column0}
                                dataSource={ds}
                                // loading={loading}
                                scroll={{ x: true, y: 655 }}
                                size="small"
                                pagination={false}
                            />
                            <div className="fw-bold mx-1">Tổng:1000</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Danhsachleft;
