import { Modal, Form, Input, Table, Checkbox, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faSave, faSearch, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import ds from "../../../../util/data";
// import Swal from "sweetalert2";
function ThemmoiCongty(props) {
    const { open, setOpen } = props;
    const column0 = [
        {
            title: "Mã",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Tên công ty",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Email",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Số điện thoại",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "FAX",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã só thuế",
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
                            <div className="modal-label">THÊM MỚI CÔNG TY</div>
                        </div>
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
                        <div className="row ">
                            <div className="col-md-9">
                                <div className="row form-row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Công ty
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Số điện thoại
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                                <div className="row form-row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Địa chỉ
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Fax
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                                <div className="row form-row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Email
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-modal ">
                                                Mã số thuế
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <Button className="form-btn w-30 m-1">
                                        <div className="d-flex align-items-center justify-content-center text-center">
                                            <FontAwesomeIcon icon={faAdd} />
                                            <span className="mx-1 form-input-label">Thêm</span>
                                        </div>
                                    </Button>
                                    <Button className="form-btn w-30 m-1">
                                        <div className="d-flex align-items-center justify-content-center text-center">
                                            <FontAwesomeIcon icon={faSave} />
                                            <span className="mx-1 form-input-label">Lưu</span>
                                        </div>
                                    </Button>
                                </div>
                                <div className="row">
                                    <Button className="form-btn w-30 m-1">
                                        <div className="d-flex align-items-center justify-content-center text-center">
                                            <FontAwesomeIcon icon={faEdit} />
                                            <span className="mx-1 form-input-label">Sửa</span>
                                        </div>
                                    </Button>{" "}
                                    <Button className="form-btn w-30 m-1">
                                        <div className="d-flex align-items-center justify-content-center text-center">
                                            <FontAwesomeIcon icon={faXmarkCircle} />
                                            <span className="mx-1 form-input-label">Hủy</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
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

export default ThemmoiCongty;
