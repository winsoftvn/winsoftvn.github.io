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
import Menuvienphi from "../../../Menuvienphi";
import ds from "../../../../../util/data";
import CtkhaibaogioihanthoigianchiđinhVKT from "../Detail";
function KhaibaogioihanthoigianchidinhDVKT() {
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
            title: "Tên dịch vụ kỹ thuật",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Thời gian CĐ (Ngày)",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
        },
        {
            title: "Ghi chú",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
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
                <Menuvienphi />
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">
                                Khai báo giới hạn thời gian chỉ định DVKT{" "}
                            </div>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <CtkhaibaogioihanthoigianchiđinhVKT open={open} setOpen={setOpen} />
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

export default KhaibaogioihanthoigianchidinhDVKT;
