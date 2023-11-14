import { Checkbox, Dropdown, Form, Input, Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowsRotate,
    faCircleArrowRight,
    faClipboardCheck,
    faFileInvoice,
    faForwardStep,
    faGear,
    faHandHoldingDollar,
    faPrint,
    faRectangleList,
    faAngleRight,
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import imguser from "../../../../assets/image/user.png";
import "./danhsachchothu.scss";
import "../../vienphi.scss";
import ds from "../../../../util/data";
import { useState } from "react";
import Danhsachleft from "./Danhsachleft";
function Danhsachchothu() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);

    //handle
    const handleDataCreate = () => {
        setOpen(true);
    };
    const handleClick = () => {
        setClick(!click);
    };
    const columns = [
        {
            title: "Mã vào viện",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Mã BN",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "160px" }}> {TDVVT} </div>,
        },
        {
            title: "Người thu tiền",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Thực thu",
            dataIndex: "TDVKT",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },

        {
            title: "Ngày thu",
            dataIndex: "MKPBYT",
            align: "center",
        },
        {
            title: "Quyển sổ",
            dataIndex: "MTDBHYT",
            align: "center",
        },
        {
            title: "Người hoàn trả",
            dataIndex: "MTT37",
            render: (MTT37) => (
                <div
                    style={{
                        width: "80px",
                    }}
                >
                    {MTT37}
                </div>
            ),
        },
        {
            title: "Ngày hoàn trả",
            dataIndex: "TTTT37",
            render: (TTTT37) => (
                <div
                    style={{
                        width: "80px",
                    }}
                >
                    {TTTT37}
                </div>
            ),
        },
        {
            title: "Số HĐ",
            dataIndex: "MTT50",
            render: (MTT50) => <div style={{ width: "80px" }}> {MTT50} </div>,
        },
        {
            title: "Lý do hoàn trả",
            dataIndex: "TTT50",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50} </div>,
        },
        {
            title: "Phiếu thu",
            dataIndex: "GM",
            align: "center",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50}</div>,
        },
        {
            title: "Chọn",
            dataIndex: "K",
            align: "center",
            render: (K) => (
                <div style={{ width: "80px" }}>
                    <Checkbox checked={K === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
    ];
    const items1 = [
        {
            label: "Tiếp",
            key: "1",
            icon: <FontAwesomeIcon icon={faForwardStep} />,
        },
        {
            label: "Thu",
            key: "2",
            icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        },
        {
            label: "Bỏ qua",
            key: "3",
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
        },
        {
            label: "In phiếu",
            key: "4",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: "In HĐ",
            key: "4",
            icon: <FontAwesomeIcon icon={faFileInvoice} />,
        },
        {
            label: "Hoàn",
            key: "4",
            icon: <FontAwesomeIcon icon={faArrowsRotate} />,
        },
        {
            label: "BV01",
            key: "4",
            icon: <FontAwesomeIcon icon={faClipboardCheck} />,
        },
    ];
   
    return (
        <>
            <div className="d-flex">
                <div className={click ? "vienphi-danhsach-left w-0" : "vienphi-danhsach-left w-25"}>
                    <div
                        className={
                            click ? "vienphi-danhsach-close-left" : "vienphi-danhsach-open-left"
                        }
                        onClick={handleClick}
                    >
                        {click ? (
                            <FontAwesomeIcon icon={faAngleRight} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleLeft} />
                        )}
                    </div>
                    <div>
                        <div className={click ? "d-none" : "w-100"}>
                            <Danhsachleft />
                        </div>
                    </div>
                </div>
                <div className={click ? "w-100" : "w-75"}>
                    <div className="vienphi-phieuthutamung-danhsachchothu">
                        <div className="vienphi-phieuthutamung-danhsachchothu-btn-thaotac ">
                            <div className="d-flex">
                                {items1.map((item) => (
                                    <Button className="form-btn color-text mx-1" key={item.key}>
                                        {item.icon}
                                        <div className="mx-1 fw-bold ">{item.label}</div>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-title text-white">
                            <div className="d-flex justify-content-between align-items-center mt-2 mx-2 ">
                                <div className="d-flex align-items-center ">
                                    <div className="vienphi-danhmuc-title mx-2">Hành chính </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-1" />
                        <div className="vienphi-border p-2">
                            <Form>
                                <div className="row">
                                    <div className="w-15">
                                        <div className="d-flex justify-content-center ">
                                            <div className="text-center align-items-center">
                                                <img src={imguser} width={100} />
                                                <div className="vienphi-danhsachchothu-text-bhyt">
                                                    BHYT 100%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-55">
                                        <div className="row form-row">
                                            <Form.Item
                                                className=" col-md-5 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Họ và tên
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Ngày sinh
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className=" col-md-3 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        G.tính
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row form-row">
                                            <Form.Item
                                                className=" col-md-12 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Địa chỉ
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row form-row">
                                            <Form.Item
                                                className=" col-md-5 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Mã BHYT
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className=" col-md-7 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-noidk">
                                                        Nơi ĐK KCB
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                        </div>

                                        <div className="row form-row">
                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Từ ngày
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Đến
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>

                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-5nam">
                                                        Ngày BĐ 5 năm
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row form-row">
                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Ngày vào
                                                    </div>
                                                }
                                            >
                                                <Input className=" form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className=" col-md-4 m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                        Cấp cứu
                                                    </div>
                                                }
                                            >
                                                <Checkbox />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="w-25 mx-2">
                                        <div className="vienphi-border-line ">
                                            <Form.Item
                                                className=" form-row m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-right">
                                                        Kí hiệu biên lai
                                                    </div>
                                                }
                                            >
                                                <Input className="m-0 form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className="form-row m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-right">
                                                        Số biên lai
                                                    </div>
                                                }
                                            >
                                                <Input className="m-0 form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className="form-row m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-right">
                                                        Tổng tiền
                                                    </div>
                                                }
                                            >
                                                <Input className="m-0 form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className="form-row m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-right">
                                                        Thu thực
                                                    </div>
                                                }
                                            >
                                                <Input className="m-0 form-control" />
                                            </Form.Item>
                                            <Form.Item
                                                className="form-row m-0"
                                                label={
                                                    <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label-right">
                                                        Số tiền
                                                    </div>
                                                }
                                            >
                                                <Input className="m-0 form-control" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <div className="row form-row d-flex justify-content-center">
                                    <Form.Item className="col-md-2 m-0">
                                        <Input className="m-0 form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-4 m-0"
                                        label={
                                            <div className="vienphi-phieuthutamung-danhsachchothu-form-input-label">
                                                Vào viện
                                            </div>
                                        }
                                    >
                                        <Input className="m-0 form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-3 m-0"
                                        label={<div className="form-input-label">TT Tổng CP</div>}
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="my-3 shadow v6">
                        <Table
                            className=""
                            columns={columns}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Danhsachchothu;
