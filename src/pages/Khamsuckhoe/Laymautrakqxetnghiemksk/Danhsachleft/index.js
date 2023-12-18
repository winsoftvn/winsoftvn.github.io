import { Table, Button, Dropdown, Form, Input, Radio, Tree } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faAngleRight,
    faArrowsRotate,
    faBroom,
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import imguser from "../../../../assets/image/user.png";
import "./danhsachleft.scss";
import ds from "../../../../util/data";
import TextArea from "antd/es/input/TextArea";
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
            title: "Ngày lấy mẫu",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "ID mẫu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã BN",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Năm sinh",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Phòng chỉ định",
            dataIndex: "MADVKT",
            align: "center",
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
                                        Chờ lấy mẫu
                                    </Radio>
                                    <Radio value={2} className="form-input-label">
                                        Đã lấy mẫu
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
                                scroll={{ x: true, y: 300 }}
                                size="small"
                                pagination={false}
                            />
                            <div className="fw-bold mx-1">Tổng:1000</div>
                        </div>
                        <div className="py-2">
                            <div className="fw-bold bg-title p-1">THÔNG TIN BỆNH NHÂN</div>
                            <div className="m-1">
                                <Form>
                                    <div className="d-flex">
                                        <div className="w-30">
                                            <img src={imguser} width={90} />
                                        </div>

                                        <div className="w-70">
                                            <div className="row form-row">
                                                <Form.Item
                                                    label={
                                                        <div className="fw-bold form-input-label danhsachleft-input-label">
                                                            Mã số
                                                        </div>
                                                    }
                                                >
                                                    <div className="d-flex">
                                                        <div className="w-60">
                                                            <Input className="form-control" />
                                                        </div>
                                                        <div className="form-input-label w-40 px-2 fw-bold text-danger">
                                                            THU PHÍ
                                                        </div>
                                                    </div>
                                                </Form.Item>
                                            </div>
                                            <div className="row form-row">
                                                <Form.Item
                                                    label={
                                                        <div className="fw-bold form-input-label danhsachleft-input-label">
                                                            Họ tên
                                                        </div>
                                                    }
                                                >
                                                    <Input className="form-control" />
                                                </Form.Item>
                                            </div>
                                            <div className="row form-row">
                                                <Form.Item
                                                    label={
                                                        <div className="fw-bold form-input-label danhsachleft-input-label">
                                                            G.tính
                                                        </div>
                                                    }
                                                >
                                                    <Input className="form-control" />
                                                </Form.Item>
                                            </div>
                                            <div className="row form-row">
                                                <Form.Item
                                                    label={
                                                        <div className="fw-bold form-input-label danhsachleft-input-label">
                                                            N.sinh
                                                        </div>
                                                    }
                                                >
                                                    <Input className="form-control" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form-row-textarea my-1">
                                        <Form.Item
                                            label={
                                                <div className="fw-bold form-input-label">
                                                    Địa chỉ
                                                </div>
                                            }
                                        >
                                            <TextArea className="form-control" />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                            <div>
                                <div className="fw-bold mt-3 bg-label color-text p-1 text-center">
                                    Các xét nghiệm đã thực hiện
                                </div>
                                <div className="fw-bold mx-2">Kỹ thuật</div>
                                <Tree treeData={treeData} className="form-input-label" />
                                <Tree treeData={treeData} className="form-input-label" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Danhsachleft;
