import { faPray, faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Checkbox, Form, Input, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ds from "../../../util/data";

function Intraketquahsksk() {
    const column0 = [
        {
            title: "Ngày vào",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Mã BN",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },

        {
            title: "Giới tính",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Công ty",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div className="vh-100">
                <div className="color-border p-1">
                    <Form>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label ">Từ ngày</div>}
                                className="col-md-3"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label ">Đến ngày</div>}
                                className="col-md-3"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label fw-bold">DS đã in</div>}
                                className="col-md-1"
                            >
                                <Checkbox />
                            </Form.Item>
                            <Form.Item className="col-md-2">
                                <Button className="form-btn">
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <span className="mx-1 form-input-label">Tìm kiếm</span>
                                    </div>
                                </Button>
                            </Form.Item>
                            <Form.Item className="col-md-2">
                                <Button className="form-btn">
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faPrint} />
                                        <span className="mx-1 form-input-label">In HS</span>
                                    </div>
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                    <div>
                        <div className="mt-3">
                            <Table
                                columns={column0}
                                dataSource={ds}
                                scroll={{ x: true, y: "100vh" }}
                                size="small"
                                pagination={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intraketquahsksk;
