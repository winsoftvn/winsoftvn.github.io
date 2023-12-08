import { Tabs, Button, Form, Input, Checkbox, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    faPoll,
    faPollH,
    faStepForward,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Danhsachleft from "./Danhsachleft";
import FormItem from "antd/es/form/FormItem";
import Maumota from "./Maumota";
import "./xetnghiem.scss";
import ds from "../../util/data";
function Xetnghiem() {
    //khaibao
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false,
    });

    const { selectedRowKeys, loading } = select;

    //truyền props
    const items1 = [
        {
            label: <div className="form-input-label ">Tiếp</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faStepForward} />,
        },
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "2",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSave} />
                </div>
            ),
        },

        {
            label: <div className="form-input-label ">Sửa</div>,
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
            label: <div className="form-input-label ">F6 - In KQ</div>,
            key: "5",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
    ];
    const tabkhamsuckhoe = [
        {
            key: "1",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPoll} />
                    <span className="mx-1">Bộ kết quả xét nghiệm</span>
                </div>
            ),
            children: <div className=""></div>,
        },
        {
            key: "2",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPollH} />
                    <span className="mx-1">Mẫu mô tả</span>
                </div>
            ),
            children: (
                <div className="color-border p-1">
                    <Maumota />
                </div>
            ),
        },
    ];
    const column0 = [
        {
            title: "ID Mẫu",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Máy xét nghiệm",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày lấy mẫu",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Loại xét nghiệm",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tình trạng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Phòng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    //ham
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKeys,
            });
        },
    };

    return (
        <>
            <div className="div-shadow v3">
                <div className="d-flex justify-content-end align-items-center p-1">
                    <Form>
                        <div>
                            <Form.Item
                                className="m-0 p-0"
                                label={<div className="form-input-label">Duyệt tất cả</div>}
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
                        TRẢ KẾT QUẢ VLTL - YHCT
                    </div>{" "}
                    <div className="px-2">
                        <Form>
                            <div className="row form-row">
                                <FormItem
                                    label={<div className="form-input-label">ID Mẫu</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                                <FormItem
                                    label={<div className="form-input-label">Ngày lấy mẫu</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">BS CĐ</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>{" "}
                                <FormItem
                                    label={<div className="form-input-label">BS trả KQ</div>}
                                    className="col-md-3"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>
                            <div className="row form-row">
                                <FormItem
                                    label={<div className="form-input-label">CĐ sơ bộ</div>}
                                    className="col-md-12"
                                >
                                    <Input className="form-control" />
                                </FormItem>
                            </div>{" "}
                        </Form>
                    </div>
                    <div className="mt-3">
                        <Table
                            columns={column0}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true, y: 300 }}
                            size="small"
                            pagination={false}
                            rowSelection={rowSelection}
                        />
                    </div>
                    <div className="mt-2">
                        <div className="px-1 tab-xetnghiem">
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                size="small"
                                items={tabkhamsuckhoe}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Xetnghiem;
