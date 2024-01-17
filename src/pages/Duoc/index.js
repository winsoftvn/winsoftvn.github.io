import { Button, Form, Input, Checkbox, Table } from "antd";
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
    faXmarkCircle,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Danhsachleft from "./Danhsachleft";
import Menuduoc from "./Menuduoc";
import { v4 as uuidv4 } from "uuid";
import FormItem from "antd/es/form/FormItem";
import "./duoc.scss";
import axios from "axios";
import SearchFilter from "./Timkiem";
function Duoc() {
    //Usestate
    const [click, setClick] = useState();
    const [dsthuoc, setDSThuoc] = useState([]);
    const [thuocdcchon, setValueThuocChon] = useState({});
    const [value, setValue] = useState(false);
    const [data, setData] = useState([]);
    const [red, setReds] = useState([]);
    const [form] = Form.useForm();
    const [valueInputThuoc, setValueInputThuoc] = useState();
    // const [suaThongTin, setSuaThongTin] = useState(false);
    //UseRef
    const refTenthuoc = useRef(null);
    const refNcap = useRef(null);
    const refSang = useRef(null);
    const refTrua = useRef(null);
    const refChieu = useRef(null);
    const refToi = useRef(null);
    const refCachdung = useRef(null);
    const refLuu = useRef(null);

    const handleDeleteThuoc = (a) => {
        let ds = dsthuoc.filter((item) => item.Ma !== a.Ma);
        setDSThuoc(ds);
    };

    const handlePushThuoc = (e) => {
        data.map((item) => {
            if (item.name === e.Tenthuoc) {
                let a = {
                    Ma: uuidv4(),
                    Tenthuoc: thuocdcchon.name,
                    ...e,
                };
                setDSThuoc((oldArray) => [...oldArray, a]);
                form.setFieldsValue({
                    Tenthuoc: "",
                    Hamluong: "",
                    DVT: "",
                    Ncap: "",
                    Sang: "",
                    Trua: "",
                    Chieu: "",
                    Toi: "",
                    Tong: "",
                    Cachdung: "",
                });
                setValue(!value);
            }
        });
        setValueInputThuoc();
        refTenthuoc.current.focus();
    };
    const handleSuaThongTin = (a, b) => {
        console.log(a, b);
    };
    const handleFocusEnter = (a, b) => {
        console.log(a, b);
        if (a.key === "Enter") {
            if (b === 1) {
                refSang.current.focus();
                a.preventDefault();
            } else if (b === 2) {
                refTrua.current.focus();
                a.preventDefault();
            } else if (b === 3) {
                refChieu.current.focus();
                a.preventDefault();
            } else if (b === 4) {
                refToi.current.focus();
                a.preventDefault();
            } else if (b === 5) {
                refCachdung.current.focus();
                a.preventDefault();
            } else if (b === 6) {
                refLuu.current.focus();
                a.preventDefault();
            }
        }
    };
    useEffect(() => {
        form.setFieldsValue({
            Tenthuoc: thuocdcchon.name,
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
        });
    }, [thuocdcchon]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                setReds(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "Tenthuoc",
            width: "20%",
        },
        {
            title: "Hàm lượng",
            dataIndex: "Hluong",
            width: "5%",
        },
        {
            title: "ĐVT",
            dataIndex: "DVT",
            width: "5%",
        },

        {
            title: "Ng.cấp",
            dataIndex: "Ncap",
            width: "5%",
        },
        {
            title: "Sáng",
            dataIndex: "Sang",
            width: "5%",
            align: "center",
        },

        {
            title: "Trưa",
            dataIndex: "Trua",
            width: "5%",
            align: "center",
        },
        {
            title: "Chiều",
            dataIndex: "Chieu",
            width: "5%",
            align: "center",
        },
        {
            title: "Tối ",
            dataIndex: "Toi",
            width: "5%",
            align: "center",
        },

        {
            title: "Tổng",
            dataIndex: "Tong",
            width: "10%",
        },
        {
            title: "Cách dùng",
            dataIndex: "Cachdung",
            width: "20%",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            width: "10%",
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            width: "5%",
            render: (_, record) => (
                <div className="d-flex justify-content-center">
                    <Button
                        className="khambenh-btn-icon color-icon-edit red"
                        onClick={() => handleDeleteThuoc(record)}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </Button>
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
                    <div className="fw-bold bg-title p-1 mt-1 text-center">THÔNG TIN XUÂT BẢN</div>{" "}
                    <div className="px-2">
                        <Form>
                            <div className="d-flex ">
                                <div className="w-80">
                                    <div className="row form-row ">
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
                                    <div className="row form-row ">
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
                                    <div className="row form-row ">
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
                                    <div className="row form-row ">
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
                                    <div className="row form-row m-0 p-0">
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
                                    <div className="row form-row m-0 p-0">
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
                                    <div className="row form-row m-0 p-0">
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
                    <div className="color-border m-1 mt-2 p-1">
                        <div className="h-max-duoc">
                            <Form>
                                <div className="row form-row m-0">
                                    <FormItem
                                        label={
                                            <div className="form-input-label duoc-form-input-label">
                                                Ngày cấp
                                            </div>
                                        }
                                        className="col-md-3 m-0"
                                    >
                                        <Input type="date" className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label duoc-form-input-label">
                                                Ghi chú
                                            </div>
                                        }
                                        className="col-md-9 m-0 p-0"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                            </Form>
                            <div className="div-shadow v5 my-2">
                                <div>
                                    <div className="label-table">
                                        <div className=" w-20">Tên thuốc</div>
                                        <div className=" w-5 text-center">H.lượng</div>
                                        <div className=" w-5 text-center">ĐVT</div>
                                        <div className=" w-5 text-center">N.cấp</div>
                                        <div className=" w-5 text-center">Sáng</div>
                                        <div className=" w-5 text-center">Trưa</div>
                                        <div className=" w-5 text-center">Chiều</div>
                                        <div className=" w-5 text-center">Tối</div>
                                        <div className=" w-10 text-center">Tổng</div>
                                        <div className=" w-20">Cách dùng</div>
                                        <div className=" w-10 text-center">Đơn giá</div>
                                        <div className=" w-5 text-center">Lưu</div>
                                    </div>{" "}
                                    <div className="scroll">
                                        <Form
                                            form={form}
                                            onFinish={handlePushThuoc}
                                            onKeyDown={(e) => handleFocusEnter(e, 8)}
                                        >
                                            <div className="d-flex">
                                                <Form.Item className="p-0 m-0 w-20">
                                                    <SearchFilter
                                                        setValueThuocChon={setValueThuocChon}
                                                        thuocdcchon={thuocdcchon}
                                                        form={form}
                                                        onFinish={handlePushThuoc}
                                                        data={data}
                                                        red={red}
                                                        setReds={setReds}
                                                        valueInputThuoc={valueInputThuoc}
                                                        setValueInputThuoc={setValueInputThuoc}
                                                        refNcap={refNcap}
                                                        refTenthuoc={refTenthuoc}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Hluong">
                                                    <Input className="form-control" />
                                                </Form.Item>{" "}
                                                <Form.Item className="p-0 m-0 w-5" name="DVT">
                                                    <Input className="form-control" />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Ncap">
                                                    <Input
                                                        className="form-control"
                                                        ref={refNcap}
                                                        onKeyDown={(e) => handleFocusEnter(e, 1)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Sang">
                                                    <Input
                                                        className="form-control"
                                                        type="number"
                                                        min={0}
                                                        classNames="text-center"
                                                        ref={refSang}
                                                        onKeyDown={(e) => handleFocusEnter(e, 2)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Trua">
                                                    <Input
                                                        className="form-control"
                                                        classNames="text-center"
                                                        type="number"
                                                        min={0}
                                                        ref={refTrua}
                                                        onKeyDown={(e) => handleFocusEnter(e, 3)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Chieu">
                                                    <Input
                                                        className="form-control"
                                                        type="number"
                                                        min={0}
                                                        classNames="text-center"
                                                        ref={refChieu}
                                                        onKeyDown={(e) => handleFocusEnter(e, 4)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5" name="Toi">
                                                    <Input
                                                        className="form-control"
                                                        type="number"
                                                        min={0}
                                                        classNames="text-center"
                                                        ref={refToi}
                                                        onKeyDown={(e) => handleFocusEnter(e, 5)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-10" name="Tong">
                                                    <Input className="form-control" />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-20" name="Cachdung">
                                                    <Input
                                                        className="form-control"
                                                        ref={refCachdung}
                                                        onKeyDown={(e) => handleFocusEnter(e, 6)}
                                                    />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-10" name="Dongia">
                                                    <Input className="form-control" readOnly />
                                                </Form.Item>
                                                <Form.Item className="p-0 m-0 w-5 d-flex justify-content-center">
                                                    <Button
                                                        className="khambenh-btn-icon color-icon-edit green"
                                                        htmlType="submit"
                                                        ref={refLuu}
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </Form>
                                        <div className="table-duoc">
                                            <Table
                                                columns={column0}
                                                dataSource={dsthuoc}
                                                // loading={loading}
                                                scroll={{ x: true, y: 190 }}
                                                size="small"
                                                bordered={true}
                                                pagination={false}
                                                showHeader={false}
                                                locale={{ emptyText: "Chưa có dữ liệu" }}
                                                onRow={(record, rowIndex) => ({
                                                    onClick: () => {
                                                        handleSuaThongTin(record, rowIndex);
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form>
                                <div className="row form-row m-0 p-0">
                                    <FormItem
                                        label={
                                            <div className="form-input-label fw-bold color-text ">
                                                Tổng tiền
                                            </div>
                                        }
                                        className="col-md-3"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label fw-bold color-text">
                                                Tỉ lệ miễn nhiễm
                                            </div>
                                        }
                                        className="col-md-5"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label fw-bold color-text ">
                                                Thực thu
                                            </div>
                                        }
                                        className="col-md-4"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Duoc;
