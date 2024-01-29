import { Table, Form, Input, Checkbox } from "antd";
import { motion } from "framer-motion";
import ds from "../../../../util/data";
function Bangkekhaitamung() {
   
    const column0 = [
        {
            title: "Mã BN",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Năm sinh",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày thu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Số HĐ",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Nhân viên thu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "Quyển số",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nhân viên hoàn",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nagỳ hoàn",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Ghi chú hoàn",
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
                <div className="vh-100">
                    <div className="text-muted my-1">
                        <div className="tiepnhan-timkiem-form">
                            <Form>
                                <div className="row form-row mb-2">
                                    <div className="col-md-4">
                                        <div className="d-flex">
                                            <Form.Item
                                                label={<div className="form-input-label">Ngày</div>}
                                                className="w-50 m-0"
                                            >
                                                <Input className="form-control" type="date" />
                                            </Form.Item>

                                            <Form.Item
                                                className="w-50"
                                                label={<div className="form-input-label">đến</div>}
                                            >
                                                <Input className="form-control" type="date" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Mã số</div>
                                                }
                                                className=" w-30 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>{" "}
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Họ tên </div>
                                                }
                                                className=" w-30 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>{" "}
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Năm sinh</div>
                                                }
                                                className=" w-30 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label">
                                                    Phiếu hoàn trả
                                                </div>
                                            }
                                            className=" m-0"
                                        >
                                            <Checkbox />
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <hr className="w-100 my-1" />
                        <div>
                            <div className="m-1">
                                <Table
                                    columns={column0}
                                    dataSource={ds}
                                    // loading={loading}
                                    scroll={{ x: true }}
                                    size="small"
                                    pagination={{ pageSize: 10 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Bangkekhaitamung;
