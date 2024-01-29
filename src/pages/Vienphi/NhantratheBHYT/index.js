import { Button, Checkbox, Form, Input, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./nhantrathebhyt.scss";
import ds from "../../../util/data";

function Nhantrathebhyt() {
    const columns = [
        {
            title: "Mã BN",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },
        {
            title: "Họ tên",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "160px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày vào viện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "STT",
            dataIndex: "TDVKT",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },
        {
            title: "Số thẻ/CMND",
            dataIndex: "DVT",
            align: "center",
            render: (DVT) => <div>{DVT}</div>,
        },
        {
            title: "Hạn thẻ",
            dataIndex: "PTH",
            render: (PTH) => (
                <div
                    style={{
                        width: "270px",
                    }}
                >
                    {PTH}
                </div>
            ),
        },
        {
            title: "Ngày nhận",
            dataIndex: "MKPBYT",
            align: "center",
        },
        {
            title: "Loại BN",
            dataIndex: "LBN",
            render: (LBN) => (
                <div
                    style={{
                        width: "138px",
                    }}
                >
                    {LBN}
                </div>
            ),
        },
        {
            title: "Người nhận thẻ",
            dataIndex: "MTDBHYT",
            align: "center",
        },
        {
            title: "Nhận thẻ BHYT/CMND",
            dataIndex: "TTT50",
            align: "center",
            render: (TTT50) => (
                <div style={{ width: "80px" }} className="text-center">
                    <Checkbox checked={TTT50 === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Trả thẻ BHYT/CMND",
            dataIndex: "TTT50",
            align: "center",
            render: (TTT50) => (
                <div style={{ width: "80px" }} className="text-center">
                    <Checkbox checked={TTT50 === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Ngày trả",
            dataIndex: "MTT50",
            render: (MTT50) => <div style={{ width: "80px" }}> {MTT50} </div>,
        },
        {
            title: "Ghi chú",
            dataIndex: "TTT50",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50} </div>,
        },
    ];
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                {/* <Menuvienphi /> */}
                <div className="text-muted">
                    <div className="d-flex align-items-center mt-2 ">
                        <div className="vienphi-danhmucy-title w-30 mx-2 fw-bold">
                            Nhận trả thẻ BHYT
                        </div>
                        <div className="w-70 m-0">
                            <Form>
                                <div className="row m-0">
                                    <Form.Item
                                        label={<div className="form-input-label">Từ ngày</div>}
                                        className="col-md-4 m-0"
                                    >
                                        <Input type="date" className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Đến ngày</div>}
                                        className="col-md-4 m-0"
                                    >
                                        <Input type="date" className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label">
                                                Danh sách trả thẻ
                                            </div>
                                        }
                                        className="col-md-2 m-0"
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                    <Form.Item className="col-md-2 m-0 text-center">
                                        <Button
                                            htmlType="submit"
                                            className="form-input-label form-btn bg"
                                        >
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            <div className="mx-1">Danh sách</div>
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>{" "}
                    <div>
                        <Table
                            dataSource={ds}
                            columns={columns}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 24 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Nhantrathebhyt;
