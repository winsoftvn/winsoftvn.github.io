import { Modal, Tabs, Button, Form, Input, Checkbox, Table, InputNumber, Select } from "antd";
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

import Danhsachleft from "./Danhsachleft";
import Menuduoc from "./Menuduoc";
import FormItem from "antd/es/form/FormItem";
import "./duoc.scss";
import ds from "../../util/data";
function Duoc() {
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
    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="tenthuoc">
                        <Input
                            // onClick={handleSetOpen}
                            className="form-control"
                            // value={thuocdcchon}
                        />
                        {/* <Select
                            className="w-100"
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="Chọn thuốc"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? "").includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? "").toLowerCase())
                            }
                            options={[
                                {
                                    value: "1",
                                    label: "Not Identified",
                                },
                                {
                                    value: "2",
                                    label: "Closed",
                                },
                                {
                                    value: "3",
                                    label: "Communicated",
                                },
                                {
                                    value: "4",
                                    label: "Identified",
                                },
                                {
                                    value: "5",
                                    label: "Resolved",
                                },
                                {
                                    value: "6",
                                    label: "Cancelled",
                                },
                            ]}
                        /> */}
                    </Form.Item>
                </div>
            ),
        },

        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="dvt">
                        <Select
                            className="w-100"
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? "").includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? "").toLowerCase())
                            }
                            options={[
                                {
                                    value: "1",
                                    label: "Cuộn",
                                },
                                {
                                    value: "2",
                                    label: "Vĩ",
                                },
                                {
                                    value: "3",
                                    label: "Hộp",
                                },
                                {
                                    value: "4",
                                    label: "Sợi",
                                },
                            ]}
                        />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: "Đ.vị dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="dvdung">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Ng.cấp",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="ngcap">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Sáng",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="sang">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },

        {
            title: "Trưa",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="trua">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Chiều",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="chieu">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Tối ",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="toi">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },

        {
            title: "Tổng",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="tong">
                        <InputNumber className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Cách dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="cachdung">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: "T.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="thtien">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>
                </div>
            ),
        },
    ];
    return (
        <>
            <Menuduoc />
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
                    <div className="fw-bold bg-title p-1 mt-1 text-center">THÔNG TIN XUÂT BẢN</div>{" "}
                    <div className="px-2">
                        <Form>
                            <div className="d-flex ">
                                <div className="w-80">
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    Mã BN
                                                </div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Họ và tên</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>{" "}
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Ngày sinh</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>{" "}
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Giới tính</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    Địa chỉ
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
                                                <div className="form-input-label duoc-form-input-label">
                                                    Bác sĩ
                                                </div>
                                            }
                                            className="col-md-12"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>{" "}
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    Chuẩn đoán
                                                </div>
                                            }
                                            className="col-md-12"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>
                                </div>
                                <div className="w-20">
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    Số hiệu
                                                </div>
                                            }
                                            className="col-md-12"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>{" "}
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    Số HĐ
                                                </div>
                                            }
                                            className="col-md-12"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>{" "}
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label duoc-form-input-label">
                                                    VAT
                                                </div>
                                            }
                                            className="col-md-12"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="color-border p-2 mt-3 m-1">
                        <Form>
                            <div className="row form-row">
                                <FormItem
                                    label={
                                        <div className="form-input-label duoc-form-input-label">
                                            Ngày cấp
                                        </div>
                                    }
                                    className="col-md-3"
                                >
                                    <Input type="date" className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={
                                        <div className="form-input-label duoc-form-input-label">
                                            Ghi chú
                                        </div>
                                    }
                                    className="col-md-9"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>{" "}
                            <div>
                                <div className="mt-2">
                                    <Table
                                        columns={column0}
                                        dataSource={ds}
                                        // loading={loading
                                        scroll={{ x: true, y: 600 }}
                                        size="small"
                                        pagination={false}
                                    />
                                    <div className="fw-bold mx-1">Tổng:1000</div>
                                </div>
                            </div>
                            <div className="row form-row ">
                                <FormItem
                                    label={<div className="form-input-label fw-bold color-text ">Tổng tiền</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label fw-bold color-text">Tỉ lệ miễn nhiễm</div>}
                                    className="col-md-5"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label fw-bold color-text ">Thực thu</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>{" "}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Duoc;
