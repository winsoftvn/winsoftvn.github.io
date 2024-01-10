import { Table, Button, Dropdown, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faPlus,
    faPrint,
    faFileExport,
    faTrashCan,
    faArrowRotateLeft,
    faEye,
    faGear,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import ds from "../../../../../util/data";
import "../../danhmuc.scss";
import Search from "antd/es/input/Search";
import Menuvienphi from "../../../Menuvienphi";
import Ctkhaibaodichvukythuat from "../Detail";
function Khaibaodichvukythuat() {
    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const items = [
        {
            key: "1",
            label: "Xem",
            icon: <FontAwesomeIcon icon={faEye} />,
        },
        {
            key: "2",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "3",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];

    const columns = [
        {
            title: "Tên dịch vụ",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },
        {
            title: "Tên dịch vụ kỹ thuật viết tắt (thu gọn)",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "160px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã DVKT 9324_AX",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Tên DVKT 9324_AX",
            dataIndex: "TDVKT",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },
        {
            title: "DVT",
            dataIndex: "DVT",
            align: "center",
            render: (DVT) => <div>{DVT}</div>,
        },
        {
            title: "P. Th hiện",
            dataIndex: "PTH",
            render: (PTH) => (
                <div
                    style={{
                        width: "270px",
                    }}
                >
                    {PTH}
                </div>
            ),
        },
        {
            title: "Mã KPBHYT",
            dataIndex: "MKPBYT",
            align: "center",
        },
        {
            title: "Loại BN",
            dataIndex: "LBN",
            render: (LBN) => (
                <div
                    style={{
                        width: "138px",
                    }}
                >
                    {LBN}
                </div>
            ),
        },
        {
            title: "Mã T.Đương BHYT",
            dataIndex: "MTDBHYT",
            align: "center",
        },
        {
            title: "Mã TT37",
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
            title: "Tên theo TT37",
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
            title: "Mã TT50",
            dataIndex: "MTT50",
            render: (MTT50) => <div style={{ width: "80px" }}> {MTT50} </div>,
        },
        {
            title: "Tên TT50",
            dataIndex: "TTT50",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50} </div>,
        },
        {
            title: "Gửi mẫu",
            dataIndex: "GM",
            align: "center",
            render: (TTT50) => (
                <div style={{ width: "80px" }}>
                    <Checkbox checked={TTT50 === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Khóa",
            dataIndex: "K",
            align: "center",
            render: (K) => (
                <div style={{ width: "80px" }}>
                    <Checkbox checked={K === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Ghi chú",
            dataIndex: "GC",
            render: (GC) => <div style={{ width: "200px" }}>{GC}</div>,
        },
        {
            title: "Giấy cam đoan",
            dataIndex: "GCD",
            align: "center",

            render: (GCD) => (
                <div style={{ width: "100px" }}>
                    <Checkbox checked={GCD === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "BB Hội chẩn",
            dataIndex: "BBHC",
            align: "center",
            render: (BBHC) => (
                <div style={{ width: "100px" }}>
                    <Checkbox checked={BBHC === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Mã nhóm BHYT 9324_AX",
            dataIndex: "MNBHYT9324_AX",
            render: (MNBHYT9324_AX) => <div style={{ width: "230px" }}>{MNBHYT9324_AX}</div>,
        },
        {
            title: "STT",
            dataIndex: "STT",
            align: "center",
        },
        {
            title: "C.Định trước theo lượt (VLTL,RHM)",
            dataIndex: "CDTTD",
            align: "center",
            render: (CDTTD) => (
                <div style={{ width: "150px" }}>
                    <Checkbox checked={CDTTD === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "C.Định hẹn TK",
            dataIndex: "CDHTTK",
            align: "center",
            render: (CDHTTK) => (
                <div style={{ width: "100px" }}>
                    <Checkbox checked={CDHTTK === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "C.Định trước theo lượt(TMH)",
            dataIndex: "CDTTL",
            align: "center",
            render: (CDTTL) => (
                <div style={{ width: "100px" }}>
                    <Checkbox checked={CDTTL === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Nhóm in",
            dataIndex: "NI",
            render: (NI) => <div style={{ width: "200px" }}>{NI}</div>,
        },
        {
            title: "VAT Xuất HĐ",
            dataIndex: "VATXHD",
            align: "center",

            render: (VATXHD) => <div style={{ width: "60px" }}>{VATXHD}</div>,
        },
        {
            title: "Mã viện phí",
            dataIndex: "MVP",
            align: "center",
            render: (MVP) => <div style={{ width: "100px" }}>{MVP}</div>,
        },

        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="w-50">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];

    const items1 = [
        {
            label: <div onClick={handleDataCreate}>Thêm mới</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faPlus} />,
        },
        {
            label: "Load",
            key: "2",
            icon: <FontAwesomeIcon icon={faArrowRotateLeft} />,
        },
        {
            label: "In",
            key: "3",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: "Export file",
            key: "4",
            icon: <FontAwesomeIcon icon={faFileExport} />,
        },
    ];
    const menuProps = {
        items: items1,
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Menuvienphi />
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center w-100">
                            <div className="vienphi-danhmuc-title mx-2 w-20">
                                Khai báo dịch vụ kỹ thuật
                            </div>
                            <div className="w-60">
                                <Search
                                    placeholder="Tìm kiếm..."
                                    allowClear
                                    className="w-100 my-1"
                                />
                            </div>
                            <div className="w-20 d-flex justify-content-center">
                                <Dropdown menu={menuProps}>
                                    <Button className="form-btn">
                                        <FontAwesomeIcon icon={faGear} className="mx-1" />
                                        Thao tác
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <Ctkhaibaodichvukythuat open={open} setOpen={setOpen} />
                    <hr className="w-100 my-1" />

                    <div className="m-1">
                        <Table
                            columns={columns}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaodichvukythuat;
