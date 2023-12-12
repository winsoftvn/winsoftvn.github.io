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
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./phauthuatthuthuat.scss";
import Danhsachleft from "./Danhsachleft";
import TextArea from "antd/es/input/TextArea";
import TuongtrinhPPT from "./TuongtrinhPPT";
import Ekipthuchien from "./Ekipthuchien";

function Phauthuatthuthuat() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props
    const tabpttt = [
        {
            key: "1",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="mx-1">Tường trình PTT</span>
                </div>
            ),
            children: (
                <div className="tiepnhan-tab">
                    <TuongtrinhPPT />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="mx-1">Ê.Kíp thực hiện</span>
                </div>
            ),
            children: (
                <div className="tiepnhan-tab">
                    <Ekipthuchien />
                </div>
            ),
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div>
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
                <div>
                    {" "}
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
            label: <div className="form-input-label ">F5 - In T.trình</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faPrint} />
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
                <div>
                    <FontAwesomeIcon icon={faSpinner} type="regular" />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Tr.Dịch</div>,
            key: "8",
            icon: (
                <div>
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
                        <div className="shadow ">
                            <div className="v6">
                                <div className={click ? "d-none" : "w-100"}>
                                    <Danhsachleft />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={click ? "w-100 vh-100" : "w-75"}>
                    <Form>
                        {" "}
                        <div className="d-flex color-border">
                            <div className="w-70">
                                <div className="fw-bold bg-title p-1 text-center">
                                    LỊCH SỬ THỰC HIỆN
                                </div>
                                <div className="row">
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    P.thuật lúc
                                                </div>
                                            }
                                            className="col-md-4"
                                        >
                                            <Input type="date" className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-col-4">
                                                    Giờ
                                                </div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input type="date" className="form-control" />
                                        </Form.Item>{" "}
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-col-4">
                                                    Đến
                                                </div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input type="date" className="form-control" />
                                        </Form.Item>{" "}
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-col-4">
                                                    Giờ
                                                </div>
                                            }
                                            className="col-md-2"
                                        >
                                            <Input type="date" className="form-control" />
                                        </Form.Item>
                                    </div>

                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    CĐ trước PTT
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    CĐ sau PTT
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    P.Pháp vô cảm
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    Tình hình
                                                </div>
                                            }
                                            className="col-md-7"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    Tai biến
                                                </div>
                                            }
                                            className="col-md-5"
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row-textarea">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    Ghi chú
                                                </div>
                                            }
                                        >
                                            <TextArea className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row mt-1">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label">
                                                    Mâu mô tả
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="w-30">
                                <div className="fw-bold bg-title p-1 text-center">SINH HIỆU</div>
                                <div className="px-2 border-line-left">
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right  ">
                                                    Chỉ số BMI
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right ">
                                                    Huyết áp (mm/Hg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right ">
                                                    Nhịp tim (lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right ">
                                                    Nhiệt độ (<sup>o</sup>C)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right ">
                                                    Chiều cao:
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label pttt-form-input-label-right ">
                                                    Cân nặng:
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <div>
                        <div className="mx-1 my-2 tab-khambenh">
                            <Tabs defaultActiveKey="1" type="card" size="small" items={tabpttt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Phauthuatthuthuat;
