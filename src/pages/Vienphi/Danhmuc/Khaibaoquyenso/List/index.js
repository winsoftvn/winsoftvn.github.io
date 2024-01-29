import { Table, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../danhmuc.scss";
import ds from "../../../../../util/data";
import Ctkhaibaoquyenso from "../Detail";
function Khaibaoquyenso() {
    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
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
    const columns = [
        {
            title: "ID",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Ký hiệu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên số",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Từ số",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
        },
        {
            title: "Đến số",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Ghi đến số",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
        },
        {
            title: "Loại số",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "K.dùng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
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

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">Khai báo quyển số</div>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <Ctkhaibaoquyenso open={open} setOpen={setOpen} />
                    <div>
                        {/* <Form>
                            <div className="row m-0">
                                <div className="col-md-10  ">
                                    <div className="row m-0 form-row">
                                        <Form.Item
                                            label={<div className="form-input-label">Ký hiệu</div>}
                                            className="m-0 col-md-4"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label">Tên số </div>}
                                            className=" m-0 col-md-4"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label">Loại số </div>}
                                            className="col-md-4 m-0"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row m-0">
                                        <Form.Item
                                            label={<div className="form-input-label">Từ số</div>}
                                            className=" m-0 col-md-4"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>

                                        <Form.Item
                                            label={<div className="form-input-label">Đến số</div>}
                                            className=" m-0 col-md-4"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label">Ghi đến số </div>
                                            }
                                            className=" m-0 col-md-4"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                </div>
                                <Form.Item className="col-md-2 m-0 text-center d-flex align-items-center">
                                    <div className="">
                                        <Button
                                            htmlType="submit"
                                            className="form-input-label form-btn"
                                        >
                                            <FontAwesomeIcon icon={faPlus} className="mx-1" /> Thêm
                                            mới
                                        </Button>
                                    </div>
                                </Form.Item>
                            </div>
                        </Form> */}
                    </div>
                    <hr className="w-100 my-1" />
                    <div className="m-1">
                        <Table
                            columns={columns}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaoquyenso;
