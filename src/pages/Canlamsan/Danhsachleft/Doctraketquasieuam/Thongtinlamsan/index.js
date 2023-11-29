import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import "./thongtinlamsan.scss";
import TextArea from "antd/es/input/TextArea";
function Thongtinlamsan() {
    return (
        <>
            <div>
                <Form>
                    <div>
                        <div className="row form-row">
                            <FormItem
                                label={
                                    <div className="form-input-label thongtinlamsan-form-input-label">
                                        BS chỉ định
                                    </div>
                                }
                                className="col-md-6"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label thongtinlamsan-form-input-label">
                                        BS chỉ định
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
                                    <div className="form-input-label thongtinlamsan-form-input-label">
                                        CĐ sơ bộ
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
                                    <div className="form-input-label thongtinlamsan-form-input-label">
                                        Chỉ định
                                    </div>
                                }
                                className="col-md-6"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label thongtinlamsan-form-input-label">
                                        Mẫu mô tả
                                    </div>
                                }
                                className="col-md-6"
                            >
                                <Input className="form-control" />
                            </FormItem>
                        </div>
                    </div>
                    <div className="color-border p-2 mt-2">
                        <div className="row ">
                            <div className="d-flex my-2">
                                <div className="form-input-label w-50">Nội dung:</div>
                                <div className="form-input-label w-50">STT:</div>
                            </div>
                            <Form.Item>
                                <TextArea
                                    className="form-control"
                                    autoSize={{ minRows: 20, maxRows: 20 }}
                                />
                            </Form.Item>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="form-input-label">Kết quả:</div>
                                <Form.Item>
                                    <TextArea
                                        className="form-control"
                                        autoSize={{ minRows: 5, maxRows: 5 }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input-label">Kết quả:</div>
                                <Form.Item>
                                    <TextArea
                                        className="form-control"
                                        autoSize={{ minRows: 5, maxRows: 5 }}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Thongtinlamsan;
