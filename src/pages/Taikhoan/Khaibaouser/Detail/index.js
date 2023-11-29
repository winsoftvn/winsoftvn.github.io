import { Modal, Button, Form, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import "./khaibaouser.scss";
// import Swal from "sweetalert2";
function CtKhaibaouser(props) {
    const { open, setOpen } = props;
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="modal-label">Thông tin chi tiết</div>
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
                width={1000}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="row form-row">
                                <FormItem
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Họ và tên
                                        </div>
                                    }
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label">Giới tính</div>}
                                    className="col-md-2"
                                >
                                    <div className="input-select">
                                        <Select
                                            placeholder="Chọn loại bệnh nhân"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={[
                                                {
                                                    label: "Nam",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Nữ",
                                                    value: "2",
                                                },
                                            ]}
                                        />
                                    </div>
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label ">Ngày sinh</div>}
                                    className="col-md-2"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">TAX/CCCD</div>}
                                    className="col-md-2"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label">Số điện thoại</div>}
                                    className="col-md-2"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>
                            <div className="row form-row">
                                <FormItem
                                    label={
                                        <div className="form-input-label  input-label-khaibaouser ">
                                            Địa chỉ
                                        </div>
                                    }
                                    className="col-md-12"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>
                            <div className="row form-row">
                                <FormItem
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Chức danh
                                        </div>
                                    }
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label">Phòng</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">Nhóm</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">Mã BS/</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>
                            <div className="row form-row mb-1">
                                <FormItem
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Tên đăng nhập
                                        </div>
                                    }
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label">Mât khẩu</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">Chữ ký</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                            </div>
                        </div>
                        <Form.Item className="text-center">
                            <hr />
                            <Button htmlType="submit" className="mx-2 vienphi-danhmuc-btn">
                                <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
                            </Button>
                            <Button danger className="mx-2" onClick={() => setOpen(false)}>
                                Thoát <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default CtKhaibaouser;
