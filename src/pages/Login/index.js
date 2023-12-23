import { Button, Form, Input, Select } from "antd";
import logo from "../../../src/assets/image/logo.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./loginpage.scss";
import { useEffect, useState } from "react";
import handleDatetime from "../../util/dateTime";
function LoginPage() {
    const [form] = Form.useForm();
    const [thoigian, setThoigian] = useState(new Date());

    useEffect(() => {
        form.setFieldsValue({
            Thoigian: handleDatetime(thoigian),
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
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
                            <Form layout="horizontal" form={form}>
                                {" "}
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
                                            className="form-row-login"
                                        >
                                            <div className="select-login">
                                                <Select
                                                    showSearch
                                                    placeholder="Chọn cơ sở"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? "")
                                                            .toLowerCase()
                                                            .includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: "jack",
                                                            label: "Cơ sở 1",
                                                        },
                                                        {
                                                            value: "lucy",
                                                            label: "Cơ sở 2",
                                                        },
                                                        {
                                                            value: "tom",
                                                            label: "Cơ sở 3",
                                                        },
                                                    ]}
                                                />
                                            </div>
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
                                <div className="d-flex justify-content-center">
                                    <Button htmlType="submit" className="btn-login">
                                        Đăng nhập
                                    </Button>
                                </div>
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
