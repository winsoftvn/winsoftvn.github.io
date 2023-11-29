import { Modal, Button, Form, Input, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faCircleXmark,
    faFile,
    faLink,
    faPenToSquare,
    faPowerOff,
    faPrint,
    faProjectDiagram,
    faRecordVinyl,
    faSave,
    faTrashCan,
    faUserClock,
    faVials,
} from "@fortawesome/free-solid-svg-icons";
import imguser from "../../../../assets/image/user.png";
import "./doctraketquasieuam.scss";
import Thongtinlamsan from "./Thongtinlamsan";
import Lichsuthuchien from "./Lichsuthuchien";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import WebcamCapture from "./Webcam";
import Recording from "./Recording";
function Doctraketquasieuam(props) {
    const { sieuam } = useSelector((state) => state.dataAdd);
    const { open, setOpen, chitiet } = props;
    const [form] = Form.useForm();
    console.log(chitiet);
    useEffect(() => {
        form.setFieldsValue({
            ma: sieuam.ID,
            hoten: sieuam.TDV,
            ngaysinh: sieuam.TDV,
            gioitinh: sieuam.ID,
        });
    }, [chitiet]);
    const items1 = [
        {
            label: <div className="form-input-label">F2 - Mới</div>,
            key: "1",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faPowerOff} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label">Sửa</div>,
            key: "3",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">F6 - In biên bản</div>,
            key: "4",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Hủy</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Thoát</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            ),
        },
    ];

    const tabdoctraketqua = [
        {
            key: "1",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    <span className="mx-1">Thông tin lâm sàng - Siêu âm</span>
                </div>
            ),
            children: (
                <div className="color-border p-1">
                    <Thongtinlamsan />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faVials} />
                    <span className="mx-1">Lịch sử thực hiện</span>
                </div>
            ),
            children: (
                <div className="color-border p-1">
                    <Lichsuthuchien />
                </div>
            ),
        },
    ];
    const tabwebcam = [
        {
            key: "1",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCamera} />
                    <span className="mx-1">Chụp ảnh</span>
                </div>
            ),
            children: (
                <div className="color-border p-1">
                    <WebcamCapture />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faRecordVinyl} />
                    <span className="mx-1">Quay phim</span>
                </div>
            ),
            children: (
                <div className="color-border p-1">
                    <Recording />
                </div>
            ),
        },
    ];
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div>BIÊN BẢNG HỘI CHUẨN</div>
                            <div>
                                <div className="d-flex justify-content-end">
                                    {items1.map((item) => (
                                        <Button className="form-btn bg mx-1 px-1" key={item.key}>
                                            {item.icon}
                                            <div className="mx-1 fw-bold">{item.label}</div>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </>
                }
                centered
                open={open}
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
                onCancel={() => setOpen(false)}
                width={"100vw"}
            >
                <div className="text-center">
                    <Form form={form}>
                        <div className="d-flex color-border p-2">
                            <div className="w-5">
                                <img src={imguser} width={60} />
                            </div>
                            <div className="w-85 px-2">
                                <div className="row form-row">
                                    <Form.Item
                                        name="ma"
                                        label={<div className="form-input-label">Mã số</div>}
                                        className="col-md-2"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Họ tên</div>}
                                        className="col-md-4"
                                        name="hoten"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Giới tính</div>}
                                        className="col-md-2"
                                        name="gioitinh"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Năm sinh</div>}
                                        className="col-md-3"
                                        name="namsinh"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Tuổi</div>}
                                        className="col-md-1"
                                        name="tuoi"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        label={<div className="form-input-label">Đối tượng</div>}
                                        className="col-md-2"
                                        name="doituong"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Địa chỉ</div>}
                                        className="col-md-10"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="w-10 d-flex justify-content-center">
                                <Button className="form-btn doctraketquasieuam-icon">
                                    <FontAwesomeIcon icon={faFile} />
                                </Button>
                                <Button className="form-btn doctraketquasieuam-icon">
                                    <FontAwesomeIcon icon={faUserClock} />
                                </Button>
                                <Button className="form-btn doctraketquasieuam-icon">
                                    <FontAwesomeIcon icon={faLink} />
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="d-flex">
                    <div className="w-25">
                        <div className="mt-2">
                            <div className="px-1 tab-xetnghiem">
                                <Tabs
                                    defaultActiveKey="1"
                                    type="card"
                                    size="small"
                                    items={tabwebcam}
                                />
                            </div>

                            {/* <WebcamCapture /> */}
                        </div>
                    </div>
                    <div className="w-75">
                        <div className="mt-2">
                            <div className="px-1 tab-xetnghiem">
                                <Tabs
                                    defaultActiveKey="1"
                                    type="card"
                                    size="small"
                                    items={tabdoctraketqua}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Doctraketquasieuam;
