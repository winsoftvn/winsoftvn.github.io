import { Modal, Tabs, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarPlus,
    faStethoscope,
    faSave,
    faPenToSquare,
    faPrint,
    faXmarkCircle,
    faAdd,
} from "@fortawesome/free-solid-svg-icons";
import "./tiepnhan.scss";
import Congkham from "./Congkham";
import Timkiem from "./Timkiem";
import CDinhhentruoc from "./Cdinhhentruoc";
import Khamsuckhoe from "./Khamsuckhoe";
import { useState } from "react";
import Thongtindangkykham from "./Thongtindangkykham";
function Tiepnhan() {
    //truyền props
    const items = [
        {
            key: "1",
            label: "Công khám",
            children: (
                <div className="tiepnhan-tab">
                    <Congkham />
                </div>
            ),
        },
        {
            key: "2",
            label: "Tìm kiếm",
            children: (
                <div className="tiepnhan-tab">
                    <Timkiem />
                </div>
            ),
        },
        {
            key: "3",
            label: "C.Định hẹn trước",
            children: (
                <div className="tiepnhan-tab">
                    <CDinhhentruoc />
                </div>
            ),
        },
        {
            key: "4",
            label: "Khám sức khỏe",
            children: (
                <div className="tiepnhan-tab">
                    <Khamsuckhoe />
                </div>
            ),
        },
    ];
    //on
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const items1 = [
        {
            label: <div className="form-input-label ">Mới</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faAdd} />,
        },
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },

        {
            label: <div className="form-input-label ">Bỏ qua</div>,
            key: "3",
            icon: <FontAwesomeIcon icon={faXmarkCircle} />,
        },
        {
            label: <div className="form-input-label ">Sửa</div>,
            key: "4",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
        {
            label: <div className="form-input-label ">F6 - In KQ</div>,
            key: "5",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
    ];
    return (
        <>
            <div className=" h-100">
                <div className="div-shadow v3">
                    <div className="d-flex justify-content-end p-1">
                        <div className="d-flex">
                            {items1.map((item) => (
                                <Button className="form-btn bg mx-1" key={item.key}>
                                    {item.icon}
                                    <div className="mx-1 fw-bold ">{item.label}</div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="w-100 m-1">
                        <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                    </div>
                    <div className="tiepnhan-btn-thongtinkhambenh">
                        <Button type="primary" onClick={showModal}>
                            <FontAwesomeIcon icon={faStethoscope} />
                        </Button>
                        <Modal
                            open={isModalOpen}
                            centered
                            okButtonProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                            cancelButtonProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                            onCancel={() => setIsModalOpen(!isModalOpen)}
                            width={1000}
                        >
                            <Thongtindangkykham />
                        </Modal>
                    </div>
                </div>
                <div className="my-3">
                    <div className="tiepnhan-title mx-2">THÔNG TIN PHÒNG KHÁM</div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="tiepnhan-phongkham-box">
                            <div className="tiepnhan-phongkham-box-title">
                                <div className="d-flex ">
                                    <div>
                                        <FontAwesomeIcon icon={faCalendarPlus} color="white" />
                                    </div>
                                    <div>PHÒNG KHÁM NỘI</div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div>Số bệnh nhân</div>
                                <div>Trong ngày: 0</div>
                                <div>Trong tháng: 0</div>
                            </div>
                        </div>
                        <div className="tiepnhan-phongkham-box">
                            <div className="tiepnhan-phongkham-box-title">
                                <div className="d-flex">
                                    <div>
                                        <FontAwesomeIcon icon={faCalendarPlus} color="white" />
                                    </div>
                                    <div>PHÒNG KHÁM NGOẠI</div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div>Số bệnh nhân</div>
                                <div>Trong ngày: 0</div>
                                <div>Trong tháng: 0</div>
                            </div>
                        </div>{" "}
                        <div className="tiepnhan-phongkham-box">
                            <div className="tiepnhan-phongkham-box-title">
                                <div className="d-flex">
                                    <div>
                                        <FontAwesomeIcon icon={faCalendarPlus} color="white" />
                                    </div>
                                    <div>PHÒNG KHÁM TAI MŨI HỌNG</div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div>Số bệnh nhân</div>
                                <div>Trong ngày: 0</div>
                                <div>Trong tháng: 0</div>
                            </div>
                        </div>{" "}
                        <div className="tiepnhan-phongkham-box">
                            <div className="tiepnhan-phongkham-box-title">
                                <div className="d-flex">
                                    <div>
                                        <FontAwesomeIcon icon={faCalendarPlus} color="white" />
                                    </div>
                                    <div>PHÒNG KHÁM NHI</div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div>Số bệnh nhân</div>
                                <div>Trong ngày: 0</div>
                                <div>Trong tháng: 0</div>
                            </div>
                        </div>
                        <div className="tiepnhan-phongkham-box">
                            <div className="tiepnhan-phongkham-box-title">
                                <div className="d-flex">
                                    <div>
                                        <FontAwesomeIcon icon={faCalendarPlus} color="white" />
                                    </div>
                                    <div>PHÒNG SẢN</div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div>Số bệnh nhân</div>
                                <div>Trong ngày: 0</div>
                                <div>Trong tháng: 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tiepnhan;
