import { Modal, Button, Form, Input, Table, Checkbox, Radio } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import ds from "../../../../util/data";
// import Swal from "sweetalert2";
function TimHD(props) {
    const { open, setOpen } = props;
    const column0 = [
        {
            title: "Tên công ty",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Số HD",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tiêu đề",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày ký HĐ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Giá trị HĐ",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày hiệu lực",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày hết hiệu lực",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Người ký",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Người phụ trách",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nhân viên tạo",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Khóa",
            dataIndex: "MADVKT",
            render: () => (
                <div style={{ width: "200px" }}>
                    <Checkbox />
                </div>
            ),
        },
    ];

    return (
        <>
            <Modal
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="modal-label">DANH SÁCH HỢP ĐỒNG</div>
                        </div>
                        <hr />
                    </>
                }
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={"100vw"}
            >
                <div className="text-center">
                    <Form>
                        <div className="row form-row">
                            <FormItem
                                label={<div className="form-input-label">Từ ngày</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" type="date" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label">đến ngày</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" type="date" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label">Danh sách khóa</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" type="date" />
                            </FormItem>{" "}
                            <FormItem
                                label={<div className="form-input-label">Tìm theo ngày</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" type="date" />
                            </FormItem>
                            <FormItem className="col-md-2">
                                <Button className="form-btn">
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <span className="mx-1 form-input-label">Tìm kiếm</span>
                                    </div>
                                </Button>
                            </FormItem>
                        </div>
                    </Form>
                    <div className="mt-3">
                        <Table
                            columns={column0}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true, y: 300 }}
                            size="small"
                            pagination={false}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default TimHD;
