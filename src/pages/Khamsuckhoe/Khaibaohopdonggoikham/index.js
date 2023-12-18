import { faAdd, faFile, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Form, Input, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import ds2 from "../../../util/data2";
import TimHD from "./TimHD";
import { useState } from "react";
import ThemmoiCongty from "./ThemmoiCty";

function Khaibaohophong() {
    const [openModalTimHD, setModalTimHD] = useState(false);
    const [openModalThemmoiCty, setModalThemmoiCty] = useState(false);

    const column0 = [
        {
            title: "Mã",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Mã NV CTy",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên NV",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Số ĐT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "CCCD",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày cấp",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nơi cấp",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Địa chỉ nhân viên",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "HK thường trú",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        ,
    ];
    return (
        <>
            <div className="w-100 vh-100">
                <TimHD open={openModalTimHD} setOpen={setModalTimHD} />
                <ThemmoiCongty open={openModalThemmoiCty} setOpen={setModalThemmoiCty} />

                <Form>
                    <div className="color-border p-1">
                        <div className="bg-title px-2 py-1 fw-bold">
                            THÔNG TIN CHI TIẾT HỢP ĐỒNG KSK
                        </div>
                        <div className="mt-2">
                            <div className="row m-0 p-0">
                                <div className="col-md-8">
                                    <div className="row form-row">
                                        <FormItem
                                            label={<div className="form-input-label">Công ty</div>}
                                            className="col-md-8"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <div className="col-md-2">
                                            <Button
                                                className="d-flex justify-content-center align-items-center form-btn"
                                                onClick={() => {
                                                    setModalTimHD(true);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faSearch} />
                                                <span className="mx-1 form-input-label">
                                                    Tìm HĐ
                                                </span>
                                            </Button>
                                        </div>
                                        <div className="col-md-2">
                                            <Button
                                                className="d-flex justify-content-center align-items-center form-btn"
                                                onClick={() => setModalThemmoiCty(true)}
                                            >
                                                <FontAwesomeIcon icon={faAdd} />
                                                <span className="mx-1 form-input-label">
                                                    Thêm mới Cty
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="row form-row">
                                        <FormItem
                                            label={<div className="form-input-label">Người ký</div>}
                                            className="col-md-8"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Ngày bắt đầu</div>
                                            }
                                            className="col-md-4"
                                        >
                                            <Input className="form-control" type="date" />
                                        </FormItem>
                                    </div>
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label">
                                                    Người phụ trách HĐ
                                                </div>
                                            }
                                            className="col-md-8"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <FormItem
                                            label={
                                                <div className="form-input-label">
                                                    Ngày kết thúc
                                                </div>
                                            }
                                            className="col-md-4"
                                        >
                                            <Input className="form-control" type="date" />
                                        </FormItem>
                                    </div>
                                    <div className="row form-row">
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Số hợp đồng</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>

                                        <FormItem
                                            label={<div className="form-input-label">Ngày ký</div>}
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Đợt T.Toán</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                        <FormItem
                                            label={
                                                <div className="form-input-label">Giá trị HĐ</div>
                                            }
                                            className="col-md-3"
                                        >
                                            <Input className="form-control" />
                                        </FormItem>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <FormItem
                                            label={<div className="form-input-label">Nội dung</div>}
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 5,
                                                    maxRows: 5,
                                                }}
                                            />
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 row form-row p-0 m-0">
                        <div className="d-flex justify-content-between">
                            <div className="w-40 d-flex">
                                <FormItem className="w-60 m-0">
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem className="mx-2 w-20 m-0">
                                    <Button className="form-btn form-input-label">Clear</Button>
                                </FormItem>
                            </div>
                            <div className="w-15">
                                <Button className="d-flex justify-content-center align-items-center form-btn">
                                    <FontAwesomeIcon icon={faFile} />
                                    <span className="mx-1 form-input-label ">
                                        Lấy dữ liệu từ file Excel
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Table
                            columns={column0}
                            dataSource={ds2}
                            // loading={loading}
                            scroll={{ x: true, y: "100vh" }}
                            size="small"
                            // rowKey={(record) => record.ID}
                            // expandable={{
                            //     expandedRowRender: (record) => (
                            //         <p style={{ margin: 0 }}>

                            //         </p>
                            //     ),
                            //     rowExpandable: (record) => record.TDV !== "Not Expandable",
                            // }}
                            pagination={false}
                        />
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Khaibaohophong;
