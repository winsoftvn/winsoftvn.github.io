import { Input, Modal, Form, Button } from "antd";
import { useEffect, useState } from "react";
import "./doimatkhau.scss";

function Doimatkhau(props) {
    const { open, setOpen } = props;

    // hàm

    const handleDoimatkhau = (e) => {
        console.log(e);
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
                onCancel={() => setOpen(false)}
                width={600}
                forceRender
            >
                <div>
                    <Form onFinish={handleDoimatkhau} layout="horizontal">
                        <div className="row form-row">
                            <Form.Item
                                name="matkhaucu"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập mật khẩu cũ
                                    </div>
                                }
                                className="col-md-12"
                            >
                                <Input className="form-control" type="password" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                name="matkhaumoi"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập mật khẩu mới
                                    </div>
                                }
                                className="col-md-12"
                            >
                                <Input className="form-control" type="password" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                name="nhaplaimatkhaumoi"
                                label={
                                    <div className="form-input-label doimatkhau-label">
                                        Nhập lại mật khẩu mới
                                    </div>
                                }
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
