import { Form, Input, Table, Button, InputNumber, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ds from "../../../../util/data";

function Donthuoc() {
    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },

        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Đ.vị dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ng.cấp",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Sáng",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },

        {
            title: "Trưa",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },
        {
            title: "Chiều",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },
        {
            title: "Tối ",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },

        {
            title: "Tổng",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" />
                </div>
            ),
        },
        {
            title: "Cách dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "T.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div>
                    <Button className="khambenh-btn-icon color-icon-edit red">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <>
            <div>
                <div className="my-1 px-1 bg-box bg-xam color-border-xam">
                    <div>
                        <Form>
                            <div className="row ">
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Ngày cấp</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-1 m-0"
                                    label={<div className="form-input-label">Hẹn TK</div>}
                                >
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Ngày TK</div>}
                                >
                                    <Input className="form-control" type="date" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-3 m-0"
                                    label={<div className="form-input-label">Ng.Nghĩ</div>}
                                >
                                    <div className="d-flex">
                                        <Input className="form-control w-20" />
                                        <Input className="form-control w-40" />
                                        - <Input className="form-control w-40" />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Tao củ</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Toa mẫu</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="div-shadow v5 my-1">
                    <Table
                        columns={column0}
                        dataSource={ds}
                        // loading={loading}
                        scroll={{ x: true, y: 200 }}
                        size="small"
                        pagination={false}
                    />
                </div>
            </div>
        </>
    );
}

export default Donthuoc;
