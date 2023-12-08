import { Button, Form, Input, Checkbox, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileExcel,
    faPenToSquare,
    faSave,
    faAngleRight,
    faAngleLeft,
    faForwardStep,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
import "../canlamsan.scss";
import TextArea from "antd/es/input/TextArea";
import Danhsachleft from "./Danhsachleft";

function CTScanner() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props

    const items1 = [
        {
            label: <div className="form-input-label ">Tiếp</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faForwardStep} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label ">F4 - Sửa</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Hủy</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F5 - In KQ</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="div-shadow v3">
                <div className="d-flex justify-content-end align-items-center p-1">
                    <Form>
                        <div>
                            <Form.Item
                                className="m-0 p-0"
                                label={<div className="form-input-label">In toa A4</div>}
                            >
                                <Checkbox />
                            </Form.Item>
                        </div>
                    </Form>
                    {items1.map((item) => (
                        <Button className="form-btn bg mx-1 px-1" key={item.key}>
                            {item.icon}
                            <div className="mx-1 fw-bold">{item.label}</div>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="d-flex">
                <div
                    className={
                        click
                            ? "danhsach-left w-0 div-shadow v5 "
                            : "danhsach-left w-25 div-shadow v5 "
                    }
                >
                    <div
                        className={click ? "danhsach-close-left" : "danhsach-open-left"}
                        onClick={() => setClick(!click)}
                    >
                        {click ? (
                            <FontAwesomeIcon icon={faAngleRight} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleLeft} />
                        )}
                    </div>
                    <div>
                        <div className="mt-1 shadow ">
                            <div className="v6">
                                <div className={click ? "d-none" : "w-100"}>
                                    <Danhsachleft />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={click ? "w-100 vh-100" : "w-75"}>
                    <div className="fw-bold bg-title p-1 mt-1 text-center">
                        TRẢ KẾT QUẢ CT SCANNER
                    </div>
                    <div className="px-2">
                        <Form>
                            <div className="color-border m-1 pb-3 px-2">
                                <div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label canlamsan-form-input-label">
                                                    BS chỉ định
                                                </div>
                                            }
                                            className="col-md-5"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label">Ngày CĐ</div>}
                                            className="col-md-2"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={<div className="form-input-label ">Ngày KQ</div>}
                                            className="col-md-2"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>{" "}
                                        <Form.Item
                                            label={
                                                <div className="form-input-label ">BS trả KQ</div>
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
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label canlamsan-form-input-label">
                                                    CĐ sơ bộ
                                                </div>
                                            }
                                            className="col-md-9"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label">
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
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row-textarea">
                                        <Form.Item
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
                                        </Form.Item>
                                    </div>
                                    <div className="row mt-4 form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label canlamsan-form-input-label">
                                                    Chỉ định
                                                </div>
                                            }
                                            className="col-md-8"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label ">
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
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="color-border m-1 p-2 mt-1 z-0">
                                <div className="row ">
                                    <div className="form-input-label">Nội dung:</div>
                                    <Form.Item>
                                        <SunEditor
                                            autoFocus={true}
                                            lang="en"
                                            setDefaultStyle="height:255px"
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
                                                    [
                                                        "align",
                                                        "horizontalRule",
                                                        "list",
                                                        "lineHeight",
                                                    ],
                                                ],
                                                formats: [
                                                    "p",
                                                    "div",
                                                    "h1",
                                                    "h2",
                                                    "h3",
                                                    "h4",
                                                    "h5",
                                                    "h6",
                                                ],
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
                </div>
            </div>
        </>
    );
}

export default CTScanner;
