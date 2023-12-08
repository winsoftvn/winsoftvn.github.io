import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import "../../../../canlamsan.scss";
import TextArea from "antd/es/input/TextArea";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import {
    align,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor,
    horizontalRule,
    lineHeight,
    list,
    paragraphStyle,
    table,
    template,
    textStyle,
    image,
    link,
} from "suneditor/src/plugins";
function Thongtinxquang() {
    return (
        <>
            <div>
                <Form>
                    <div>
                        <div className="row form-row">
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        BS chỉ định
                                    </div>
                                }
                                className="col-md-5"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        Ngày CĐ
                                    </div>
                                }
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        Ngày KQ
                                    </div>
                                }
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </FormItem>{" "}
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        BS trả KQ
                                    </div>
                                }
                                className="col-md-3"
                            >
                                <div className="input-select">
                                    <Select
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
                        </div>
                        <div className="row form-row">
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        CĐ sơ bộ
                                    </div>
                                }
                                className="col-md-9"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        KTV phụ
                                    </div>
                                }
                                className="col-md-3"
                            >
                                <div className="input-select">
                                    <Select
                                        style={{
                                            width: "100%",
                                        }}
                                        options={[]}
                                    />
                                </div>
                            </FormItem>
                        </div>
                        <div className="row form-row-textarea">
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        DB Bệnh
                                    </div>
                                }
                                className="col-md-12"
                            >
                                <TextArea
                                    className="form-control"
                                    autoSize={{ minRows: 3, maxRows: 3 }}
                                />
                            </FormItem>
                        </div>
                        <div className="row mt-4 form-row">
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        Chỉ định
                                    </div>
                                }
                                className="col-md-8"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={
                                    <div className="form-input-label canlamsan-form-input-label">
                                        Mẫu mô tả
                                    </div>
                                }
                                className="col-md-4"
                            >
                                <div className="input-select">
                                    <Select
                                        style={{
                                            width: "100%",
                                        }}
                                        options={[]}
                                    />
                                </div>
                            </FormItem>
                        </div>
                    </div>
                    <div className="color-border px-2 py-0 mt-2">
                        <div className="row ">
                            <div className="d-flex my-2">
                                <div className="form-input-label w-50">Nội dung:</div>
                                <div className="form-input-label w-50">STT:</div>
                            </div>
                            <Form.Item>
                                <SunEditor
                                    autoFocus={true}
                                    lang="en"
                                    setDefaultStyle="height:280px"
                                    setOptions={{
                                        showPathLabel: false,
                                        placeholder: "Enter your text here!!!",
                                        plugins: [
                                            align,
                                            font,
                                            fontColor,
                                            fontSize,
                                            formatBlock,
                                            hiliteColor,
                                            horizontalRule,
                                            lineHeight,
                                            list,
                                            paragraphStyle,
                                            table,
                                            template,
                                            textStyle,
                                            image,
                                            link,
                                        ],
                                        buttonList: [
                                            ["font", "fontSize", "formatBlock"],
                                            ["bold", "underline", "italic"],
                                            ["fontColor", "hiliteColor"],
                                            ["removeFormat"],

                                            ["outdent", "indent"],
                                            ["align", "horizontalRule", "list", "lineHeight"],
                                        ],
                                        formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                                        font: [
                                            "Arial",
                                            "Calibri",
                                            "Comic Sans",
                                            "Courier",
                                            "Garamond",
                                            "Georgia",
                                            "Impact",
                                            "Lucida Console",
                                            "Palatino Linotype",
                                            "Segoe UI",
                                            "Tahoma",
                                            "Times New Roman",
                                            "Trebuchet MS",
                                        ],
                                    }}
                                    // defaultValue={richTextEditorHtml}
                                    // onChange={handleEditorChange}
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
                                <div className="form-input-label">Đề nghị:</div>
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

export default Thongtinxquang;
