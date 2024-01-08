import { Button, Form, Input, Select } from "antd";
import logo from "../../../src/assets/image/logo.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./loginpage.scss";
import { useEffect, useState } from "react";
import handleDatetime from "../../util/dateTime";
import { useNavigate } from "react-router-dom";
import { errorInfo, successInfo } from "../../components/Dialog/Dialog";
function LoginPage() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [thoigian, setThoigian] = useState(new Date());

    const handleLogin = (e) => {
        console.log(e);
        successInfo("Đăng nhập thành công");
        errorInfo("Đăng nhập thất bại");
        navigate("/home"); // chuyển link dô pageadmin
    };

    const coso = [
        {
            value: "1",
            label: "Cơ sở 1",
        },
        {
            value: "2",
            label: "Cơ sở 2",
        },
        {
            value: "3",
            label: "Cơ sở 3",
        },
    ];
    useEffect(() => {
        form.setFieldsValue({
            Thoigian: handleDatetime(thoigian),
        });
    }, [thoigian]);
    return (
        <>
            <div className="bg-login">
                <div className="vh-100 d-flex justify-content-end align-items-center ">
                    <div className="box-login rounded">
                        <div className="title rounded-top">
                            <img src={logo} width={30} height={30} alt="logo.png" />
                            <div>e-MedLink Y Tế Điện Tử</div>
                        </div>
                        <div className="content rounded-bottom">
                            <Form layout="horizontal" form={form} onFinish={handleLogin}>
                                <div className="box-input">
                                    <Form.Item
                                        name="Tendangnhap"
                                        label={
                                            <div className="form-input-label w-label">
                                                Tên đăng nhập
                                            </div>
                                        }
                                        className="form-row-login"
                                    >
                                        <Input className="form-control-login" />
                                    </Form.Item>

                                    <div>
                                        <Form.Item
                                            name="Matkhau"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Mật khẩu
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <Input.Password
                                                iconRender={(visible) =>
                                                    visible ? (
                                                        <EyeTwoTone />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )
                                                }
                                                className="form-control-login"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <Form.Item
                                            name="Coso"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Cơ sở
                                                </div>
                                            }
                                            className="form-row-login select-login"
                                        >
                                            <Select
                                                showSearch
                                                placeholder="Chọn cơ sở"
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    (option?.label ?? "")
                                                        .toLowerCase()
                                                        .includes(input.toLowerCase())
                                                }
                                                options={coso.map((item) => ({
                                                    value: item.value,
                                                    label: item.label,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <Form.Item
                                            name="Thoigian"
                                            label={
                                                <div className="form-input-label w-label">
                                                    Thời gian
                                                </div>
                                            }
                                            className="form-row-login"
                                        >
                                            <Input className="form-control-login" readOnly />
                                        </Form.Item>
                                    </div>
                                </div>
                                <br />
                                <Form.Item>
                                    <div className="d-flex justify-content-center">
                                        <Button htmlType="submit" className="btn-login">
                                            Đăng nhập
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Form>

                            <hr className="w-80 mx-auto" />
                            <div className="text-center form-input-label">
                                Tôi quên mất mật khẩu rồi ! Tôi muốn
                                <span className="link-quenmatkhau"> lấy lại mật khẩu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
