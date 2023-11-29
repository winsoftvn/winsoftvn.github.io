import { Modal, Tabs, Button, Form, Input, Checkbox, Table } from "antd";
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

import "./vltl_yhct.scss";
import Danhsachleft from "./Danhsachleft";
import TextArea from "antd/es/input/TextArea";
import ds from "../../util/data";
import Thongtinkythuat from "./Thongtinkythuat";

function VLTL_YHCT() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props
    const tabvltl = [
        {
            key: "1",
            label: "Thông số kỹ thuật",
            children: (
                <div className="tiepnhan-tab color-border">
                    <Thongtinkythuat />
                </div>
            ),
        },
        {
            key: "2",
            label: "Thông số kỹ thuật kéo cột sống",
            children: <div className="tiepnhan-tab">{/* <LichsuCLSThuoc /> */}</div>,
        },
        {
            key: "3",
            label: "Mô tả",
            children: <div className="tiepnhan-tab">{/* <LichsuCLSThuoc /> */}</div>,
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div >
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
                <div >
                    <FontAwesomeIcon icon={faSpinner} type="regular" />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Tr.Dịch</div>,
            key: "8",
            icon: (
                <div >
                    <FontAwesomeIcon icon={faDroplet} />
                </div>
            ),
        },
    ];
    const column0 = [
        {
            title: "Dịch vụ kỹ thuật",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Ngày vào",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày ra",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Bs thực hiện",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Phòng thực hiện",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            align: "center",
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
                        CHI TIẾT DỊCH VỤ KỸ THUẬT
                    </div>{" "}
                    <div className="color-border p-2 m-1">
                        <Table
                            columns={column0}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true, y: 200 }}
                            size="small"
                            pagination={false}
                        />
                    </div>
                    <div className="">
                        <Form>
                            <div className="color-border m-1 pb-3 px-2">
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="form-input-label vltlyhct-form-input-label ">
                                                Kỹ thuật
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label vltlyhct-form-input-label ">
                                                BS chỉ định
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
                                            <div className="form-input-label vltlyhct-form-input-label ">
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
                                            <div className="form-input-label vltlyhct-form-input-label ">
                                                Mẫu mô tả
                                            </div>
                                        }
                                        className="col-md-6"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label vltlyhct-form-input-label ">
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
                                            <div className="form-input-label vltlyhct-form-input-label">
                                                Ghi chú:
                                            </div>
                                        }
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <div className="col-md-6">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label vltlyhct-form-input-label">
                                                    Ngày vào:
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label vltlyhct-form-input-label">
                                                    Ngày ra:
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                </div>{" "}
                            </div>
                        </Form>
                    </div>
                    <div className="color-border">
                        <div className="fw-bold text-center p-1">Nội dung kết quả</div>
                        <div className="tab-vltl-yhct px-1">
                            <Tabs defaultActiveKey="1" type="card" size="small" items={tabvltl} />
                        </div>
                        <div className="row mt-2 px-2">
                            <div className="col-md-6">
                                <div className="form-input-label">
                                    Nội dung diễn biến - Kết Luận:
                                </div>
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
                </div>
            </div>
        </>
    );
}

export default VLTL_YHCT;
