import { Table, Button, Dropdown, Form, Input, Radio } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
    faEye,
    faPenToSquare,
    faArrowsRotate,
    faBroom,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./danhsachleft.scss";
import { setDataSieuAm } from "../../../../slices/dataAdd";
import ds from "../../../../util/data";
import Doctraketquactscanner from "./Doctraketquactscanner";
function Danhsachleft() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [chitiet, setChiTiet] = useState("");
    const [activeModify, setActiveModify] = useState(false);
    //store
    const dispatch = useDispatch();
    const handleClick = () => {
        setClick(!click);
    };
    const handleOpenModel = (a) => {
        dispatch(setDataSieuAm(a));
        setChiTiet(a);
        setOpen(true);
    };
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
                                scroll={{ x: true, y: "100vh" }}
                                size="small"
                                pagination={false}
                                onRow={(record) => ({
                                    onClick: () => {
                                        handleOpenModel(record);
                                    },
                                })}
                            />
                            <div className="fw-bold mx-1">Tổng:1000</div>
                        </div>
                        <Doctraketquactscanner open={open} setOpen={setOpen} chitiet={chitiet} />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Danhsachleft;
