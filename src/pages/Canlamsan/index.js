import { Modal, Tabs, Button, Form, Input, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faCalendarCheck,
    faFileExcel,
    faPenToSquare,
    faReply,
    faSave,
    faFile,
    faAngleRight,
    faAngleLeft,
    faDroplet,
    faSpinner,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./canlamsan.scss";
import Danhsachleft from "./Danhsachleft";
import TextArea from "antd/es/input/TextArea";

function Canlamsan() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props

    const items1 = [
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div className="color-icon-edit blue">
                    <FontAwesomeIcon icon={faSave} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F2 - Bỏ qua</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faReply} />,
        },
        {
            label: <div className="form-input-label ">F4 - Sửa</div>,
            key: "3",
            icon: (
                <div className="color-icon-edit yellow">
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Hủy</div>,
            key: "4",
            icon: (
                <div className="color-icon-edit red">
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F5 - In T.trình</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Thuốc + VTTH</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFile} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">PỨ Thuốc</div>,
            key: "7",
            icon: (
                <div className="color-icon-edit green">
                    <FontAwesomeIcon icon={faSpinner} type="regular" />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Tr.Dịch</div>,
            key: "8",
            icon: (
                <div className="color-icon-edit red">
                    <FontAwesomeIcon icon={faDroplet} />
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
                        <Button className="form-btn color-text mx-1 px-1" key={item.key}>
                            {item.icon}
                            <div className="mx-1">{item.label}</div>
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
                        THÔNG TIN LÂM SÀNG - SIÊU ÂM
                    </div>{" "}
                    <div className="px-2">
                        <Form>
                            <div className="color-border m-1 pb-3 px-2">
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="form-input-label canlamsan-form-input-label">
                                                BS chỉ định
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label canlamsan-form-input-label">
                                                BS trả KQ
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="form-input-label canlamsan-form-input-label">
                                                CĐ sơ bộ
                                            </div>
                                        }
                                        className="col-md-12"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="form-input-label canlamsan-form-input-label">
                                                Chỉ định
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label canlamsan-form-input-label">
                                                Mô tả mẫu
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="color-border m-1 p-2 mt-1">
                                <div className="row ">
                                    <div className="form-input-label">Nội dung:</div>
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
                </div>
            </div>
        </>
    );
}

export default Canlamsan;
