import {
    Dropdown,
    Form,
    Input,
    Table,
    Button,
    InputNumber,
    Tabs,
    Space,
    Checkbox,
    Select,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faHandPointRight,
    faCapsules,
    faPills,
    faHouseChimneyMedical,
    faChevronDown,
    faPen,
    faPenToSquare,
    faSearchDollar,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";
import "./phieukham.scss";
import ds from "../../../util/data";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Toathuoctaicho from "./Toathuoctaicho";
import { useRef, useState } from "react";
import Toamuangoai from "./Toamuangoai";
import Thuoctutruc from "./Thuoctutruc";
import Chidinh from "./Chidinh";
import Donthuoc from "./Donthuoc";
import ChidinhKB from "./ChidinhKB";
import Bienbanhoichuan from "./Tienich/Bienbanhoichuan";
import Bienbantuvong from "./Tienich/Bienbantuvong";
import Ghinhantheodosinhhieu from "./Tienich/Ghinhantheodoisinhhieu";
import Lapphieutheodoidieutri from "./Tienich/Lapphieutheodoidieutri";
import Lapphieuchamsoc from "./Tienich/Lapphieuchamsoc";
import Lapphieutheodoitruyendich from "./Tienich/Lapphieutheodoitruyendich";
function Phieukham() {
    const [openModelChidinh, setModelChidinh] = useState(false);
    const [openModelToathuoctainha, setModelToathuoctainha] = useState(false);
    const [openModelToamuangoai, setModelToamuangoai] = useState(false);
    const [openModelThuoctutruc, setModelThuoctutruc] = useState(false);
    const [openModelBienbanhoichuan, setModelBienbanhoichuan] = useState(false);
    const [openModelBienbantuvong, setModelBienbantuvong] = useState(false);
    const [openModelTheodoisinhhieu, setModelTheodoisinhhieu] = useState(false);
    const [openModelLapphieutheodoidieutri, setModelLapphieutheodoidieutri] = useState(false);
    const [openModelLapphieuchamsoc, setModelLapphieuchamsoc] = useState(false);
    const [openModelLapphieutheodoitruyendich, setModelLapphieutheodoitruyendich] = useState(false);
    // const handlePrint = useReactToPrint({
    //     content: () => test.current,
    //     documentTitle: "emp-data",
    //     onafterprint: () => alert("Print Success"),
    // });
    const handleSetOpen = (a) => {
        if (a === "1") {
            setModelChidinh(true);
        } else if (a === "2") {
            setModelToathuoctainha(true);
        } else if (a === "3") {
            setModelToamuangoai(true);
        } else if (a === "4") {
            setModelThuoctutruc(true);
        }
    };
    const onClickDropdownTienich = ({ key }) => {
        if (key === "1") {
            setModelBienbanhoichuan(true);
        } else if (key === "2") {
            setModelBienbantuvong(true);
        } else if (key === "3") {
            setModelTheodoisinhhieu(true);
        } else if (key === "5") {
            setModelLapphieutheodoidieutri(true);
        } else if (key === "6") {
            setModelLapphieuchamsoc(true);
        } else if (key === "7") {
            setModelLapphieutheodoitruyendich(true);
        }
    };
    const items1 = [
        {
            label: <div className="form-input-label">Chỉ định</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faHandPointRight} />,
        },
        {
            label: <div className="form-input-label">Toa thuốc tại chổ</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faCapsules} />,
        },
        {
            label: <div className="form-input-label">Toa mua ngoài</div>,
            key: "3",
            icon: <FontAwesomeIcon icon={faPills} />,
        },
        {
            label: <div className="form-input-label">Thuốc tủ trực</div>,
            key: "4",
            icon: <FontAwesomeIcon icon={faHouseChimneyMedical} />,
        },
    ];
    const items = [
        {
            label: <div className="form-input-label">Ghi - Biên bản hội chuẩn</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Biên bản tử vong</div>,
            key: "2",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        <hr />,
        {
            label: <div className="form-input-label">Ghi - Theo dõi sinh hiệu</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Dị ứng thuốc</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu theo dõi điều trị</div>,
            key: "5",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu chăm sóc</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu theo dõi truyền dịch</div>,
            key: "7",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        <hr />,
        {
            label: <div className="form-input-label">In - Test</div>,
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu theo dõi điều trị</div>,
            key: "9",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu chăm sóc</div>,
            key: "10",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu công khai sử dụng thuốc</div>,
            key: "11",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu theo dõi chức năng sống</div>,
            key: "12",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu theo dõi truyền dịch</div>,
            key: "13",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu khám bệnh</div>,
            key: "14",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Hồ sơ ngoại trú</div>,
            key: "15",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Nhận file hồ sơ</div>,
            key: "16",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Xem chi phí khám chữa bệnh</div>,
            key: "17",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSearchDollar} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Giấy xin ra viện</div>,
            key: "18",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
    ];

    const menuProps = {
        items,
        onClick: onClickDropdownTienich,
    };

    const tabphieukham = [
        {
            key: "1",
            label: "Chỉ định",
            children: (
                <div className="tiepnhan-tab">
                    <ChidinhKB />
                </div>
            ),
        },
        {
            key: "2",
            label: "Đơn thuốc",
            children: (
                <div className="tiepnhan-tab">
                    <Donthuoc />
                </div>
            ),
        },
    ];
    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Đ.vị dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ng.cấp",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Sáng",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },

        {
            title: "Trưa",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },
        {
            title: "Chiều",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },
        {
            title: "Tối ",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" min={0} />
                </div>
            ),
        },

        {
            title: "Tổng",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }}>
                    {" "}
                    <InputNumber className="border-input w-100 form-control" />
                </div>
            ),
        },
        {
            title: "Cách dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "T.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div>
                    <Button className="khambenh-btn-icon color-icon-edit red">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                </div>
            ),
        },
    ];

    const column1 = [
        {
            title: "Mã ",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div> {TDV} </div>,
        },
        {
            title: "Tên",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div>
                <div className="color-border">
                    <div className="m-1 ">
                        <div className="d-flex">
                            {items1.map((item) => (
                                <Button
                                    className="form-btn "
                                    key={item.key}
                                    onClick={() => handleSetOpen(item.key)}
                                >
                                    {item.icon}
                                    <div className="mx-1 fw-bold ">{item.label}</div>
                                </Button>
                            ))}
                            <Dropdown menu={menuProps} onClick={(a) => console.log(a.key)}>
                                <Button className="form-btn">
                                    <Space>
                                        <div className="fw-bold form-input-label">Tiện ích</div>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Modal hien thi */}
                    <Chidinh open={openModelChidinh} setOpen={setModelChidinh} />
                    <Toathuoctaicho
                        open={openModelToathuoctainha}
                        setOpen={setModelToathuoctainha}
                    />
                    <Toamuangoai open={openModelToamuangoai} setOpen={setModelToamuangoai} />
                    <Thuoctutruc open={openModelThuoctutruc} setOpen={setModelThuoctutruc} />
                    <Bienbanhoichuan
                        open={openModelBienbanhoichuan}
                        setOpen={setModelBienbanhoichuan}
                    />
                    <Bienbantuvong open={openModelBienbantuvong} setOpen={setModelBienbantuvong} />
                    <Ghinhantheodosinhhieu
                        open={openModelTheodoisinhhieu}
                        setOpen={setModelTheodoisinhhieu}
                    />
                    <Lapphieutheodoidieutri
                        open={openModelLapphieutheodoidieutri}
                        setOpen={setModelLapphieutheodoidieutri}
                    />
                    <Lapphieuchamsoc
                        open={openModelLapphieuchamsoc}
                        setOpen={setModelLapphieuchamsoc}
                    />
                    <Lapphieutheodoitruyendich
                        open={openModelLapphieutheodoitruyendich}
                        setOpen={setModelLapphieutheodoitruyendich}
                    />
                    {/* /// */}
                    <div className=" py-2">
                        <Form>
                            <div className="d-flex">
                                <div className="w-70 px-2">
                                    <div className="row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Tr.chứng, bệnh lý
                                                </div>
                                            }
                                            className="m-0 col-md-6"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 5,
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Tiểu sử bản thân
                                                </div>
                                            }
                                            className="m-0 col-md-6"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 5,
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Lý do khám
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    CĐ ban đầu
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Xử trí
                                                </div>
                                            }
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    ICD10
                                                </div>
                                            }
                                            className="col-md-12 m-0"
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row ">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    ICD10 KT
                                                </div>
                                            }
                                            className="col-md-12 m-0"
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                            <div className="color-border">
                                                <Table
                                                    dataSource={ds}
                                                    columns={column1}
                                                    scroll={{ X: true, y: 50 }}
                                                    pagination={false}
                                                    size="small"
                                                />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Lời dặn
                                                </div>
                                            }
                                            className="col-md-12 mt-1"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 1,
                                                    maxRows: 1,
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="w-30 px-2 border-line-left">
                                    <div className="row">
                                        <Form.Item
                                            className="m-0 form-row "
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Mạch(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    H.áp(mm/Hg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    SPO2
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    N.thở(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Nhiệt độ (<sup>o</sup>C)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="  w-55"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Ch.Cao (cm)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>

                                        <Form.Item
                                            className=" w-45"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label-cannang">
                                                    C.Nặng(kg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                        className="m-0 mt-2"
                                        label={
                                            <div className="form-input-label khambenh-phieukham-right-input-label">
                                                PP Đ.trị
                                            </div>
                                        }
                                    >
                                        <TextArea
                                            className="form-control"
                                            autoSize={{
                                                minRows: 3,
                                                maxRows: 5,
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className="m-0  form-row"
                                        label={
                                            <div className="form-input-label khambenh-phieukham-right-input-label">
                                                KQ Đ.trị
                                            </div>
                                        }
                                    >
                                        <Input className="form-control text-center" />
                                    </Form.Item>
                                    <Form.Item
                                        className="m-0  form-row"
                                        label={
                                            <div className="form-input-label khambenh-phieukham-right-input-label">
                                                TT Ra viện
                                            </div>
                                        }
                                    >
                                        <Input className="form-control text-center" />
                                    </Form.Item>
                                    <Form.Item
                                        className="m-0 form-row"
                                        label={
                                            <div className="form-input-label khambenh-phieukham-right-input-label">
                                                Ngày ra
                                            </div>
                                        }
                                    >
                                        <Input className="form-control text-center" />
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="color-border mt-2">
                    <div className="tabphieukham-position">
                        <div className="mx-1 my-2 tab-khambenh">
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                size="small"
                                items={tabphieukham}
                            />
                        </div>
                        <div className="phieukham-input-position d-flex align-items-center mx-1">
                            <Form>
                                <div className="row">
                                    <Form.Item
                                        className="col-md-2 m-0"
                                        label={<div className="form-input-label">Thuốc DV</div>}
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-4 m-0"
                                        label={<div className="form-input-label">TT BHYT</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-3 m-0"
                                        label={<div className="form-input-label">Dịch vụ</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-3 m-0"
                                        label={<div className="form-input-label">Tổng</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Phieukham;
