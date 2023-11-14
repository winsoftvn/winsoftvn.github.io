import { Modal, Button, Form, Input, Select, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../../danhmuc.scss";
// import Swal from "sweetalert2";
function Ctkhaibaoquyenso(props) {
    const { open, setOpen } = props;
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="vienphi-danhmuc-add">
                            Thông tin chi tiết
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
                width={1000}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="row">
                                <div className="row m-0">
                                    <div className="col-md-12  ">
                                        <div className="row m-0 form-row">
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Ký hiệu</div>
                                                }
                                                className="m-0 col-md-4"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Tên số </div>
                                                }
                                                className=" m-0 col-md-4"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Loại số </div>
                                                }
                                                className="col-md-4 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row m-0">
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Từ số</div>
                                                }
                                                className=" m-0 col-md-4"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>

                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">Đến số</div>
                                                }
                                                className=" m-0 col-md-4"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">
                                                        Ghi đến số{" "}
                                                    </div>
                                                }
                                                className=" m-0 col-md-4"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Form.Item className="text-center">
                            <hr />
                            <Button
                                htmlType="submit"
                                className="mx-2 vienphi-danhmuc-btn"
                            >
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

export default Ctkhaibaoquyenso;
