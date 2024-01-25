import { Input, Modal, Form, Button } from "antd";
import "./doimatkhau.scss";
import { errorInfo, successInfo } from "../../../components/Dialog/Dialog";
import loginAPI from "../../../services/loginApi";

function Doimatkhau(props) {
    const { open, setOpen, employee } = props;

    const [form] = Form.useForm();

    // hàm

    const handleDoimatkhau = async (e) => {
        if (e.UserPass_OLD === e.UserPass_NEW) {
            errorInfo("Mật khẩu mới không được trùng khớp mật khẩu cũ.");
        } else if (e.UserPass_NEW !== e.ReUserPass_NEW) {
            errorInfo("Mật khẩu nhập lại không trùng khớp.");
        } else {
            let data = {
                RowID_Employee: employee.RowID,
                UserPass_OLD: e.UserPass_OLD,
                UserPass_NEW: e.UserPass_NEW,
            };
            let a = await loginAPI.doimatkhau(data);
            if (a.data.Code === "err") {
                errorInfo(a.data.Content);
            } else if (a.data.Code === "ok") {
                successInfo(a.data.Content);
                setOpen(false);
                form.resetFields();
            }
            console.log(e);
        }
    };
    return (
        <>
            <Modal
                title="Đổi mật khẩu"
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
                onCancel={() => {
                    setOpen(false);
                    form.resetFields();
                }}
                width={600}
                forceRender
            >
                <div>
                    <Form form={form} onFinish={handleDoimatkhau} layout="horizontal">
                        <div className="row">
                            <Form.Item
                                name="UserPass_OLD"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập mật khẩu cũ
                                    </div>
                                }
                                rules={[
                                    {
                                        pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không nhập ký tự đặc biệt
                                            </div>
                                        ),
                                    },
                                    {
                                        required: true,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng nhập thông tin
                                            </div>
                                        ),
                                    },
                                    {
                                        max: 50,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không vượt quá 50 ký tự
                                            </div>
                                        ),
                                    },
                                ]}
                                className="col-md-12"
                            >
                                <Input className="form-control" type="password" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            <Form.Item
                                name="UserPass_NEW"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập mật khẩu mới
                                    </div>
                                }
                                rules={[
                                    {
                                        pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không nhập ký tự đặc biệt
                                            </div>
                                        ),
                                    },
                                    {
                                        required: true,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng nhập thông tin
                                            </div>
                                        ),
                                    },
                                    {
                                        max: 50,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không vượt quá 50 ký tự
                                            </div>
                                        ),
                                    },
                                ]}
                                className="col-md-12"
                            >
                                <Input className="form-control" type="password" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            <Form.Item
                                name="ReUserPass_NEW"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập lại mật khẩu mới
                                    </div>
                                }
                                rules={[
                                    {
                                        pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không nhập ký tự đặc biệt
                                            </div>
                                        ),
                                    },
                                    {
                                        required: true,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng nhập thông tin
                                            </div>
                                        ),
                                    },
                                    {
                                        max: 50,
                                        message: (
                                            <div className="form-input-label">
                                                Vui lòng không vượt quá 50 ký tự
                                            </div>
                                        ),
                                    },
                                ]}
                                className="col-md-12"
                            >
                                <Input className="form-control" type="password" />
                            </Form.Item>
                        </div>
                        <div className="mt-3 row form-row ">
                            <Form.Item className="d-flex justify-content-center">
                                <Button className="form-btn-luu form-input-label" htmlType="submit">
                                    Đổi mật khẩu
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Doimatkhau;
